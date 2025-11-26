const { Sequelize } = require('sequelize');

// Configuración de la base de datos SQLite
// archivo llamado 'mexbbq.sqlite' en la raíz del proyecto
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './mexbbq.sqlite',
    logging: false 
});

module.exports = sequelize;