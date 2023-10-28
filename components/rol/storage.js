const model = require('./model')

function get_rol(filtro_rol) {
    let filtro = {}
    if (filtro_rol) {
        filtro = { name: filtro_rol }
    }
    const objeto = model.find(filtro)
    return objeto
}


module.exports = {
    get: get_rol,
}