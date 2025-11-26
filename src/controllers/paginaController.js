const path = require('path');

// Muestra la página de inicio
const inicio = (req, res) => {
    // Retrocedemos dos niveles (../../) para salir de controllers y de src
    res.sendFile(path.resolve(__dirname, '../../views/inicio.html'));
};

// Muestra la página del menú
const menu = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../views/menu.html'));
};

// Muestra la página de nosotros
const nosotros = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../views/nosotros.html'));
};

// Muestra la página de contacto
const contacto = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../views/contacto.html'));
};

module.exports = {
    inicio,
    menu,
    nosotros,
    contacto
};