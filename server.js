require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarBD = require('./config/db');

const app = express();

conectarBD();

app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/productoRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/reportes', require('./routes/reporteRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});