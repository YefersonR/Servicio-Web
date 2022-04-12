const mongoose = require('mongoose');
const Schema = mongoose.Schema


const contactoSchema = new Schema({
    nombre:{type: String},
    apellido:{type: String},
    telefono:{type: String}
})

module.exports = Contacto = mongoose.model('Contacto',contactoSchema);