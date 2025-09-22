const express = require('express');
const router = express.Router();
const paginaController = require('../controllers/paginaController');

router.get('/', paginaController.inicio);
router.get('/contacto', paginaController.contacto);
router.get('/menu', paginaController.menu);
router.get('/nosotros', paginaController.nosotros);
router.get('/api/menu', paginaController.apiMenu);

module.exports = router;
