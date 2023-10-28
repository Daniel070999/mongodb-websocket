const empresa = require('../components/empresa/interface')
const representantelegal = require('../components/representantelegal/interface')
const user = require('../components/user/interface')
const rol = require('../components/rol/interface')

const routes = function (server) {
    server.use('/empresa', empresa)
    server.use('/representantelegal', representantelegal)
    server.use('/user', user)
    server.use('/rol', rol)
}

module.exports = routes