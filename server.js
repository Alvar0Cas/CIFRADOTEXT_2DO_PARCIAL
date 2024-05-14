//rutas

const base64Router = require ('/routes/index')
const cesarRouter = require ('/routes/index')
const loginRouter = require ('/routes/index')
const registroRouter = require ('/routes/index')
const base64Router = require ('/routes/index')


// Importar los módulos necesarios
const express = require('express');
const path = require('path');

// Crear una instancia de la aplicación Express
const app = express();


// Función para cifrar en Base64
function cifrarBase64(texto) {
  return Buffer.from(texto).toString('base64');
}

// Función para descifrar en Base64
function descifrarBase64(textoCifrado) {
  return Buffer.from(textoCifrado, 'base64').toString('utf-8');
}

// Función para cifrar con el cifrado de Vigenère
function cifrarVigenere(texto, clave) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    const textoChar = texto.charCodeAt(i);
    const claveChar = clave.charCodeAt(i % clave.length);
    resultado += String.fromCharCode((textoChar + claveChar) % 256);
  }
  return resultado;
}

// Función para descifrar con el cifrado de Vigenère
function descifrarVigenere(textoCifrado, clave) {
  let resultado = '';
  for (let i = 0; i < textoCifrado.length; i++) {
    const textoChar = textoCifrado.charCodeAt(i);
    const claveChar = clave.charCodeAt(i % clave.length);
    resultado += String.fromCharCode((textoChar - claveChar + 256) % 256);
  }
  return resultado;
}

// Función para cifrar con el código César
function cifrarCesar(texto, desplazamiento) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    const charCode = texto.charCodeAt(i);
    resultado += String.fromCharCode((charCode + desplazamiento) % 256);
  }
  return resultado;
}

// Función para descifrar con el código César
function descifrarCesar(textoCifrado, desplazamiento) {
  let resultado = '';
  for (let i = 0; i < textoCifrado.length; i++) {
    const charCode = textoCifrado.charCodeAt(i);
    resultado += String.fromCharCode((charCode - desplazamiento + 256) % 256);
  }
  return resultado;
}

// Función para cifrar en código binario
function cifrarBinario(texto) {
  return texto.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

// Función para descifrar en código binario
function descifrarBinario(textoBinario) {
  return textoBinario.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Configurar Express para usar Pug como motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Definir rutas para cifrar/descifrar
app.get('/cifrar-base64/:texto', (req, res) => {
  const texto = req.params.texto;
  const textoCifrado = cifrarBase64(texto);
  res.send(textoCifrado);
});

app.get('/descifrar-base64/:textoCifrado', (req, res) => {
  const textoCifrado = req.params.textoCifrado;
  const texto = descifrarBase64(textoCifrado);
  res.send(texto);
});

// Rutas para cifrar/descifrar con Vigenère
app.get('/cifrar-vigenere/:texto/:clave', (req, res) => {
  const texto = req.params.texto;
  const clave = req.params.clave;
  const textoCifrado = cifrarVigenere(texto, clave);
  res.send(textoCifrado);
});

app.get('/descifrar-vigenere/:textoCifrado/:clave', (req, res) => {
  const textoCifrado = req.params.textoCifrado;
  const clave = req.params.clave;
  const texto = descifrarVigenere(textoCifrado, clave);
  res.send(texto);
});

// Rutas para cifrar/descifrar con Código César
app.get('/cifrar-cesar/:texto/:desplazamiento', (req, res) => {
  const texto = req.params.texto;
  const desplazamiento = parseInt(req.params.desplazamiento);
  const textoCifrado = cifrarCesar(texto, desplazamiento);
  res.send(textoCifrado);
});

app.get('/descifrar-cesar/:textoCifrado/:desplazamiento', (req, res) => {
  const textoCifrado = req.params.textoCifrado;
  const desplazamiento = parseInt(req.params.desplazamiento);
  const texto = descifrarCesar(textoCifrado, desplazamiento);
  res.send(texto);
});

// Rutas para cifrar/descifrar en código binario
app.get('/cifrar-binario/:texto', (req, res) => {
  const texto = req.params.texto;
  const textoCifrado = cifrarBinario(texto);
  res.send(textoCifrado);
});

app.get('/descifrar-binario/:textoBinario', (req, res) => {
  const textoBinario = req.params.textoBinario;
  const texto = descifrarBinario(textoBinario);
  res.send(texto);
});

// Definir una ruta para la página principal
app.get('/', function(req, res) {
  res.render('index', { title: 'Página de inicio' });
});

// Configurar Express para escuchar en un puerto específico
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

