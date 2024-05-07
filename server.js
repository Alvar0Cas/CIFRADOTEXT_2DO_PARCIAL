// Importar los módulos necesarios
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar la estrategia de autenticación local
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Aquí deberías agregar la lógica de autenticación, como verificar las credenciales en una base de datos
    if (username === 'usuario' && password === 'contraseña') {
      return done(null, { username: username });
    } else {
      return done(null, false, { message: 'Nombre de usuario o contraseña incorrectos.' });
    }
  }
));

// Configurar Passport para serializar y deserializar usuarios
passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  // Aquí podrías buscar al usuario en la base de datos
  done(null, { username: username });
});

// Middleware para procesar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar Express para usar Pug como motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Definir una ruta para la página principal
app.get('/', function(req, res) {
  res.render('index', { title: 'Página de inicio' });
});

// Inicializar Passport y establecer la sesión
app.use(passport.initialize());
app.use(passport.session());

// Agregar aquí tus rutas y configuraciones adicionales


const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

