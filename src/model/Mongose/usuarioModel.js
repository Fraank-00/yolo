const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
});

const usuarioModel = mongoose.model('Usuario', usuarioSchema);

module.exports = usuarioModel;
