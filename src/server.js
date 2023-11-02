
require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const usuarioRouter = require('./routes/usuarioRutes');
const autenticacionRouter = require('./routes/autenticacionRoutes');
const port = 3000



server.get('/', (req, res) => {
  res.send('hola mundo')
});
//middleware
server.use(bodyParser.json());
server.use(usuarioRouter);
server.use(autenticacionRouter);

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto  ${port}`)
});