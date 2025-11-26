const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Importaciones para Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

// Importación del Middleware Propio
const securityMiddleware = require('./middlewares/securityMiddleware');

// Importación de rutas
const paginaRoutes = require('./routes/paginaRoutes');
const productoRoutes = require('./routes/productoRoutes');

const sequelize = require('./config/database');
require('./models/Producto');

const app = express();
const PORT = 8000;

// --- SEGURIDAD ---

// 1. Helmet: Protege cabeceras (Desactivamos CSP para que carguen tus imágenes y mapas)
app.use(helmet({
    contentSecurityPolicy: false
}));

// 2. CORS: Permite conexiones externas
app.use(cors());

// 3. Rate Limiting
app.use(rateLimit({ 
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 1000, 
    message: "Demasiadas peticiones, espera un momento."
}));

// --- MIDDLEWARES ---
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Middleware propio 
app.use(securityMiddleware);

// --- DOCUMENTACIÓN SWAGGER ---
// Entra a http://127.0.0.1:8000/api-docs para ver la documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// --- RUTAS ---
app.use('/', paginaRoutes);            
app.use('/api/productos', productoRoutes); // Backend (API JSON)

// --- DB Y SERVIDOR ---
sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
        });
    })
    .catch(error => console.error('Error BD:', error));
    
    module.exports = app;