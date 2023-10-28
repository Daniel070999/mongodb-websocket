const empresa = require('../components/empresa/interface')
const representantelegal = require('../components/representantelegal/interface')
const user = require('../components/user/interface')
const rol = require('../components/rol/interface')
const login = require('../components/autenticacion/interface')
const { requireAdminRole } = require('../network/middlewares/auth.jwt');

const routes = function (server) {
    server.use('/empresa', empresa)
    server.use('/representantelegal', requireAdminRole, representantelegal)
    server.use('/user', user)
    server.use('/rol', rol)
    server.use('/login', login)
}

module.exports = routes