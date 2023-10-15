const model = require('./model')

function get_representantelegal(filtrorepresentantelegal) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtrorepresentantelegal) {
            filtro = { _id: filtrorepresentantelegal }
        }
        model.find(filtro)
            .populate('empresa')
            .then(data => {
                console.log(data);

                lista = []
                for (elemento of data) {
                    console.log(elemento);
                    lista.push({ id: elemento._id, representantelegal: elemento.nombre, empresa: elemento.empresa[0].nombre })
                }
                resolve(lista)
            })
    })
}

function add_representantelegal(representantelegal) {
    const objeto = new model(representantelegal)
    objeto.save()
}

async function update_representantelegal(representantelegal) {
    const objeto = await model.findOne({ _id: representantelegal.id })

    if (objeto) {
        objeto.nombre = representantelegal.nombre

        return resultado = await objeto.save()
    } else {
        return null
    }
}

async function delete_representantelegal(representantelegal) {
    return await model.deleteOne({ _id: representantelegal.id })
}

module.exports = {
    add: add_representantelegal,
    get: get_representantelegal,
    update: update_representantelegal,
    delete: delete_representantelegal,
}