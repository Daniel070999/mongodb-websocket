const storage = require('./storage')

function get_rol(filtro_rol) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filtro_rol))
    })
}

module.exports = {
    get_rol,
}