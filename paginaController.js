const paginaService = require('../services/paginaService');
const path = require('path');

exports.inicio = (req, res) => {
  const data = paginaService.getInicioData();
  res.send(`<h1>${data.mensaje}</h1><p>Fecha: ${data.fecha}</p>
            <nav>
              <a href="/contacto">Contacto</a> |
              <a href="/menu">Menú</a> |
              <a href="/nosotros">Nosotros</a>
            </nav>`);
};

exports.contacto = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contacto.html'));
};

exports.menu = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/menu.html'));
};

exports.nosotros = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/nosotros.html'));
};

// API que devuelve el menú en JSON
exports.apiMenu = (req, res) => {
  const platillos = paginaService.getMenu();
  res.json(platillos);
};
