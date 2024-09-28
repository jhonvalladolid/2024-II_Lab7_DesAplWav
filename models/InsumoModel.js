const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insumoSchema = new Schema({
  nominsumo: {
      type: String,
      required: true,
      maxlength: 150
  },
  idproveedor: {
      type: Schema.Types.ObjectId,
      ref: 'proveedores', // Enlaza a la colección de proveedores
      required: true
  },
  preUni: {
      type: Number,
      required: true,
      min: 0
  },
  stock: {
      type: Number,
      required: true,
      min: 0
  },
  fechaVencimiento: {
      type: Date,
      required: false
  },
  categoria: {
      type: String,
      required: false
  }
}, { versionKey: false });

module.exports = mongoose.model('tb_insumo', insumoSchema);
