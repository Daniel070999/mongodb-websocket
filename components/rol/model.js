const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

const Role = mongoose.model('roles', roleSchema);

module.exports = Role;
