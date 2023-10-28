const model = require('./model')

function add_user(user) {
    const objeto = new model(user)
    objeto.save()
}

module.exports = {
    add: add_user,
}