
const archivoRouter =require('express').Router();
const {
    subirArchivo
}= require('../controller/archivosControllers');

archivoRouter.post('/subirArchivo' , subirArchivo)



module.exports= archivoRouter;