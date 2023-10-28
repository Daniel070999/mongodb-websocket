const express = require('express')
const body_parser = require('body-parser')
const socket = require('./socketIO')
//const init = require('./components/rol/initial') /* Se vuelve a comentar para evitar problemas de volver a registrar en mongoDB*/

const routes = require('./network/routes')
const db = require('./db')

//inicializa los roles
// init; /* Se vuelve a comentar para evitar problemas de volver a registrar en mongoDB*/

let app = express()
const server = require('http').Server(app)
const io = socket.initializeSocket(server);

const config = require('./config')
db(config.DB_URL)

app.use('/', express.static('public'))
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }))

routes(app, io)


server.listen(config.PORT, function () {
    console.log(`La aplicacion esta escuchando en http://localhost:${config.PORT}`)
})