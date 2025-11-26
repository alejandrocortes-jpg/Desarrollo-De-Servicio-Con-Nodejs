const express = require('express');
const router = express.Router();

// Importa las funciones del controlador
const { inicio, menu, nosotros, contacto } = require('../controllers/paginaController');

router.get('/', inicio);
router.get('/menu', menu);
router.get('/nosotros', nosotros);
router.get('/contacto', contacto);

module.exports = router;