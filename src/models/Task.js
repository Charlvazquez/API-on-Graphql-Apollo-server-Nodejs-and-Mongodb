const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
    },
    tema: {
        type: String,
        required: true
    }
});

module.exports = model('Task', taskSchema);