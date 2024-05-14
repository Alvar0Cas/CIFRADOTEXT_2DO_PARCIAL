// Importar los módulos necesarios
const express = require('express');
const path = require('path');
const router = require('./routers/router');
const bodyParser = require('body-parser');


// Crear una instancia de la aplicación Express
const app = express();

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Definir rutas
app.use('/', router);


// Funciones para cifrar/descifrar
function cifrarCesar(texto, desplazamiento) {
  // Implementa la lógica para cifrar en código César aquí
}

function descifrarCesar(textoCifrado, desplazamiento) {
  // Implementa la lógica para descifrar en código César aquí
}

function cifrarBinario(texto) {
  // Implementa la lógica para cifrar en código binario aquí
}

function descifrarBinario(textoBinario) {
  // Implementa la lógica para descifrar en código binario aquí
}

function cifrarHexadecimal(texto) {
  // Implementa la lógica para cifrar en hexadecimal aquí
}

function descifrarHexadecimal(textoHexadecimal) {
  // Implementa la lógica para descifrar en hexadecimal aquí
}

function cifrarBase64(texto) {
  // Implementa la lógica para cifrar en Base64 aquí
}

function descifrarBase64(textoCifrado) {
  // Implementa la lógica para descifrar en Base64 aquí
}

// Rutas para cifrar/descifrar
app.post('/cifrar-cesar', (req, res) => {
  const texto = req.body.texto;
  const desplazamiento = parseInt(req.body.desplazamiento);
  const textoCifrado = cifrarCesar(texto, desplazamiento);
  res.render('cesar', { resultado: textoCifrado });
});

app.post('/descifrar-cesar', (req, res) => {
  const textoCifrado = req.body.texto;
  const desplazamiento = parseInt(req.body.desplazamiento);
  const texto = descifrarCesar(textoCifrado, desplazamiento);
  res.render('cesar', { resultado: texto });
});

app.post('/cifrar-binario', (req, res) => {
  const texto = req.body.texto;
  const textoCifrado = cifrarBinario(texto);
  res.render('binario', { resultado: textoCifrado });
});

app.post('/descifrar-binario', (req, res) => {
  const textoBinario = req.body.texto;
  const texto = descifrarBinario(textoBinario);
  res.render('binario', { resultado: texto });
});

app.post('/cifrar-hexadecimal', (req, res) => {
  const texto = req.body.texto;
  const textoCifrado = cifrarHexadecimal(texto);
  res.render('hexadecimal', { resultado: textoCifrado });
});

app.post('/descifrar-hexadecimal', (req, res) => {
  const textoHexadecimal = req.body.texto;
  const texto = descifrarHexadecimal(textoHexadecimal);
  res.render('hexadecimal', { resultado: texto });
});

app.post('/cifrar-base64', (req, res) => {
  const texto = req.body.texto;
  const textoCifrado = cifrarBase64(texto);
  res.render('base64', { resultado: textoCifrado });
});

app.post('/descifrar-base64', (req, res) => {
  const textoCifrado = req.body.texto;
  const texto = descifrarBase64(textoCifrado);
  res.render('base64', { resultado: texto });
});

// Definir una ruta para la página principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Página de inicio' });
});

// Configurar Express para escuchar en un puerto específico
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
