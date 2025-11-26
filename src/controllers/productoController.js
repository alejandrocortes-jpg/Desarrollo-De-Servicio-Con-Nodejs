// Importamos el Servicio en lugar del Modelo
const productoService = require('../services/productoService');

// 1. Crear un producto (POST)
const crearProducto = async (req, res) => {
    try {
        // El controlador recibe la petición y llama al servicio
        const nuevoProducto = await productoService.createProduct(req.body);
        
        res.status(201).json({
            success: true,
            message: "Producto creado exitosamente",
            data: nuevoProducto
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 2. Obtener todos los productos (GET)
const obtenerProductos = async (req, res) => {
    try {
        const productos = await productoService.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Lista de productos recuperada",
            data: productos
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 3. Actualizar un producto (PUT)
const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        await productoService.updateProduct(id, req.body);
        res.status(200).json({
            success: true,
            message: "Producto actualizado correctamente"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 4. Eliminar un producto (DELETE)
const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        await productoService.deleteProduct(id);
        res.status(200).json({
            success: true,
            message: "Producto eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    crearProducto,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto
};