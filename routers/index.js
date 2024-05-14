// routes/index.js
const express = require('express');
const router = express.Router();

// Rutas públicas
router.get('/', (req, res) => {
  res.render('index', { title: req.user != null ? `TEXT-C0D3 ${req.user.nombre}` : 'TEXT-C0D3', user: req.user != null ? req.user.nombre : '' });
});

module.exports = router;
