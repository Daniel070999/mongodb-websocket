const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../user/model');
const route = express.Router()

route.post('/', async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const user = await User.findOne({ usuario });
        if (!user) {
            return res.status(401).json({ message: 'Usuario no existe' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Clave incorrectas' });
        }
        const token = jwt.sign(
            {
                id: user._id,
                usuario: user.usuario,
                rol: user.rol,
            },
            'clavesecreta',
            { expiresIn: '1h' }
        );
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = route