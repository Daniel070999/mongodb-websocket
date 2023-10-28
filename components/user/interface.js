const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.post('/', function (req, res) {
    controller.add_user(req.body)
        .then((data) => response.success(req, res, data, 201))
        .catch((error) => response.error(req, res, error, 500))
})

module.exports = route