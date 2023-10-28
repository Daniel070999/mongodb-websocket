const storage = require('./storage')

function add_user(user) {
    return new Promise((resolve, reject) => {
        if (!user.usuario || !user.password || !user.nombre || !user.apellido || !user.correo) {
            return reject('No existen datos.')
        }
        storage.add(user)
        resolve(user)
    })
}

module.exports = {
    add_user
}