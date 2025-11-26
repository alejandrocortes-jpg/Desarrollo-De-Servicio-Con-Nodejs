const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MEX BBQ API',
            version: '1.0.0',
        description: 'API del Restaurante (Documentación generada manualmente)',
    },
    servers: [
        { url: 'http://127.0.0.1:8000' },
    ],
    // AQUI DEFINIMOS LAS RUTAS DIRECTAMENTE EN JSON (No fallan los espacios)
    paths: {
        '/api/productos': {
        get: {
            summary: 'Obtener lista de productos',
            tags: ['Productos'],
            responses: {
            200: { description: 'Lista recuperada exitosamente' }
            }
        },
        post: {
            summary: 'Crear nuevo producto',
            tags: ['Productos'],
            responses: {
                201: { description: 'Producto creado' }
                    }
                }
            }
        }
    },
  apis: [], // Lo dejamos vacío para que no busque en los archivos y no de error
};

const specs = swaggerJsdoc(options);
module.exports = specs;