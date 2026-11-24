const Producto = require('../models/Producto');

// 10. Get Agregaciones por categoría
exports.obtenerEstadisticas = async (req, res) => {
  try {
    const stats = await Producto.aggregate([
      {
        $group: {
          _id: '$categoria',
          totalProductos: { $sum: 1 },
          precioPromedio: { $avg: '$precio' },
          stockTotal: { $sum: '$stock' }
        }
      }
    ]);
    res.json({ status: 'OK', agregaciones: stats });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};