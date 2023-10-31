
require('dotenv').config();
const express = require('express')
const server = express()
const usuarioRouter = require('./routes/usuarioRutes')
const port = 3000

server.get('/', (req, res) => {
  res.send('hola mundo')
})

server.use(usuarioRouter);

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto  ${port}`)
})