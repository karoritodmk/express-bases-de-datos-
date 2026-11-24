
const mongoose = require('mongoose');

const conectarBD = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/adso_guia7_db';
    await mongoose.connect(mongoURI);
    console.log('Conexión exitosa a la base de datos MongoDB');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
};

module.exports = conectarBD;