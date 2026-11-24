const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'el nombre es obligatorio!!'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'el email es obligatorio!!'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'la contraseña es obligatoria!!']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('usuario', UsuarioSchema);