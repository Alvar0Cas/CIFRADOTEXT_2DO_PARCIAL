const CryptoJS = require("crypto-js");

// Clave de 8 bytes para DES
const key = CryptoJS.enc.Utf8.parse("12345678");

// Texto a cifrar
const plaintext = "Hola, mundo!";

// Cifrado
const ciphertext = CryptoJS.DES.encrypt(plaintext, key, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
});

console.log("Texto cifrado:", ciphertext.toString());
