const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const req_number = {
    type: Number,
    required: true,
}

const empresa_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa',
    }
}, {
    timestamps: true,
})

const representantelegal_schema = new Schema({
    ruc: req_number,
    cedula: req_number,
    nombre: req_string,
    apellido: req_string,
    email: req_string,
    domicilio: req_string,
    cedula: req_number,
    empresa: [empresa_schema],
})

const model = mongoose.model('representantelegal', representantelegal_schema)
module.exports = model
