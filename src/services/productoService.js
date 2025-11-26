// Importamos el modelo aquí, porque el Servicio es quien habla con la Base de Datos
const Producto = require('../models/Producto');

// 1. Servicio para Crear
const createProduct = async (data) => {
    return await Producto.create(data);
};

// 2. Servicio para Leer Todos
const getAllProducts = async () => {
    return await Producto.findAll();
};

// 3. Servicio para Actualizar
const updateProduct = async (id, data) => {
    // Retorna el número de filas afectadas
    return await Producto.update(data, { where: { id } });
};

// 4. Servicio para Eliminar
const deleteProduct = async (id) => {
    return await Producto.destroy({ where: { id } });
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};