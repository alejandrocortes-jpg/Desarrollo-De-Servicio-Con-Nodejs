const request = require('supertest');
const app = require('../app'); // Importamos tu servidor

describe('Pruebas de API Productos', () => {

    // 1. Prueba del GET (Leer productos)
    it('GET /api/productos - Debería devolver status 200 y una lista', async () => {
        const res = await request(app).get('/api/productos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('success', true);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    // 2. Prueba del POST (Crear producto)
    it('POST /api/productos - Debería crear un producto nuevo', async () => {
        const nuevoProducto = {
            nombre: "Producto Test",
            precio: 50,
            descripcion: "Prueba unitaria",
            categoria: "Test"
        };
        
        const res = await request(app).post('/api/productos').send(nuevoProducto);
        expect(res.statusCode).toEqual(201);
        expect(res.body.data).toHaveProperty('nombre', 'Producto Test');
    });

    // 3. Prueba de Error (Intentar borrar algo que no existe o sin permiso)
    // Como tenemos el middleware de seguridad, esto debería dar 403 o 404
    it('DELETE /api/productos/9999 - Debería fallar sin token', async () => {
        const res = await request(app).delete('/api/productos/9999');
        // Esperamos que falle porque no mandamos la clave de Admin
        expect(res.statusCode).toEqual(403); 
    });

});