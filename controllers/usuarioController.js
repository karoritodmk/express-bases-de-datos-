const Usuario = require('../models/Usuario');

// 7. post Registrar usuario
exports.registrarUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({
      status: 'OK',
      message: 'Usuario registrado exitosamente',
      data: { id: usuario._id, nombre: usuario.nombre, email: usuario.email }
    });
  } catch (error) {
    res.status(400).json({ status: 'Error', error: error.message });
  }
};

// 8. post Autenticación
exports.loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ status: 'Error', message: 'Credenciales inválidas' });
    }

    res.json({
      status: 'OK',
      message: 'Inicio de sesión exitoso',
      usuario: { id: usuario._id, nombre: usuario.nombre, email: usuario.email }
    });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};

// 9. get Listar usuarios (sin contraseña)
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({}, '-password');
    res.json({ status: 'OK', total: usuarios.length, data: usuarios });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};