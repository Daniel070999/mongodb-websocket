const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const req_string = {
    type: String,
    required: true,
};

const user_schema = new Schema({
    user: req_string,
    email: req_string,
    password: req_string,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roles' 
        }
    ],
});

// Antes de guardar el usuario, encripta la contraseña
user_schema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

const model = mongoose.model('user', user_schema);
module.exports = model;
