const georefRouter = require('express').Router();

const { obtenerProvincias } = require ('../controller/GeorefController.js');

georefRouter.get('/obtenerProvincias',obtenerProvincias);


module.exports = georefRouter;