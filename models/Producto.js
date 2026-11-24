const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'el nombre es obligatorio!'],
    trim: true
  },
  precio: {
    type: Number,
    required: [true, 'el precio es obligatorio!'],
    min: [0, 'el precio no puede ser negativo!']
  },
  categoria: {
    type: String,
    required: [true, 'la categoría es obligatoria!'],
    trim: true
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('producto', ProductoSchema);