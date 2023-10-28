const storage = require('./storage')

function add_user(user) {
    return new Promise((resolve, reject) => {
        if (!user.user || !user.email || !user.password || !user.roles) {
            return reject('No existen datos.')
        }
        storage.add(user)
        resolve(user)
    })
}

module.exports = {
    add_user
}