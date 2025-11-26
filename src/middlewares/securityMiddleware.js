const securityMiddleware = (req, res, next) => {
    // Simulamos seguridad: bloqueamos si alguien intenta borrar algo sin permiso
    // (Solo aplica para métodos DELETE)
    if (req.method === 'DELETE') {
        const token = req.headers['x-admin-pass'];
        if (token !== 'SOY_EL_ADMIN') {
            return res.status(403).json({
                success: false,
                message: "Acceso denegado: No tienes permisos de administrador para borrar productos."
            });
        }
    }
    // Si no es DELETE, deja pasar
    next();
};

module.exports = securityMiddleware;