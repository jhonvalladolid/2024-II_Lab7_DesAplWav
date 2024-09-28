const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proveedorSchema = new Schema({
  nombrecia: {
      type: String,
      required: true,
      maxlength: 50
  },
  contacto: {
      type: String,
      required: true
  },
  telefono: {
      type: String,
      required: true,
      maxlength: 15
  },
  direccion: {
      type: String,
      required: false
  }
}, { versionKey: false });

module.exports = mongoose.model('proveedores', proveedorSchema);
