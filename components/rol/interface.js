const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function (req, res) {
    const filtro_rol = req.query.nombre || null
    controller.get_rol(filtro_rol)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

module.exports = route