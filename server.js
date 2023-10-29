const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/usuarios', (req, res) => {
    res.send('lista de usuarios')
  })

app.listen(port, () => {
  console.log(`Servidor correindo en el puerto  ${port}`)
})