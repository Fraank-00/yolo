
require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');



const usuarioRouter = require('./routes/usuarioRutes');
const autenticacionRouter = require('./routes/autenticacionRoutes');
const archivoRouter = require('./routes/archivosRouter');
const georefRouter = require ('./routes/georefRouter.js')
const port = 3000

server.get('/', (req, res) => {
  
  res.send('hola mundo')
});
//middleware
server.use(bodyParser.json());
server.use(fileUpload());
//Rutas
server.use(usuarioRouter);
server.use(autenticacionRouter);
server.use(archivoRouter);
server.use(georefRouter);

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto  ${port}`)
});