# MEX BBQ - API RESTful

Sistema de gestión para el restaurante MEX BBQ. Este proyecto implementa una arquitectura MVC con Node.js y Express.

## Tecnologías
- **Node.js & Express**: Servidor y API.
- **SQLite & Sequelize**: Base de datos y ORM.
- **Tailwind CSS**: Diseño Frontend.
- **Swagger**: Documentación de API (OpenAPI).

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Ejecutar `npm start`.

## Seguridad
El proyecto cuenta con middlewares de:
- Helmet (Cabeceras seguras).
- CORS (Acceso cruzado).
- Rate Limit (Protección DDoS).
- Middleware Propio (Validación de Admin).

## Documentación
Visita `/api-docs` para ver la especificación OpenAPI (Swagger).
