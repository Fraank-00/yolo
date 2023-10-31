
const express = require('express')
const server = express()
const port = 3000

server.get('/', (req, res) => {
  res.send('hola mundo')
})

server.listen(port, () => {
  console.log(`Servidor correindo en el puerto  ${port}`)
})