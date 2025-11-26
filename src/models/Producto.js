const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definimos la estructura de la tabla "Productos"
const Producto = sequelize.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING, 
        defaultValue: 'General'
    },
    imagen: {
        type: DataTypes.STRING
    }
});

module.exports = Producto;