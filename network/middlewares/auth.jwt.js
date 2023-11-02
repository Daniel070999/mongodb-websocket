const jwt = require('jsonwebtoken');
const Rol = require('../../components/rol/model');

function requireAdminRole(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, 'clavesecreta', async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        const admin = await obtainRolAdministrador()
        if (decoded.rol[0] !== admin) {
            return res.status(401).json({ message: 'Acceso no autorizado, necesita permisos de Administrador' });
        }
        next();
    });
}
async function obtainRolAdministrador() {
    const rol = 'administrador'
    const rolAdmin = await Rol.findOne({ name:rol });
    return rolAdmin.id
}

module.exports = { requireAdminRole };
