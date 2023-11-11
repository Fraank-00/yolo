const axios = require('axios');

const GeorefController= {}

GeorefController.obtenerProvincias = async (req, res) => {
  const url= 'https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json';

  try {
    const respuesta = await axios.get(url);
    return res.json(respuesta.data);
} catch (error) {
    console.error('Error al obtener provincias:', error);
    return res.status(500).json({ mensaje: 'Error al obtener provincias' });
}
};


module.exports = GeorefController