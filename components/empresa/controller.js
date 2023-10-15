const storage = require('./storage')

function get_empresa(filtro_empresa) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filtro_empresa))
    })
}

function add_empresa(empresa) {
    return new Promise((resolve, reject) => {
        if (!empresa.ruc || !empresa.nombre || !empresa.domicilio || !empresa.telefono) {
            return reject('No existen datos.')
        }
        storage.add(empresa)
        resolve(empresa)
    })
}

function update_empresa(empresa) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update(empresa)
        if (resultado) {
            return resolve(empresa)
        } else {
            return reject('No existe la empresa.')
        }
    })
}

function delete_empresa(empresa) {
    return new Promise((resolve, reject) => {
        storage.delete(empresa)
        resolve(empresa)
    })
}

module.exports = {
    get_empresa,
    add_empresa,
    update_empresa,
    delete_empresa,
}