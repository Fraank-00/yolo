const http = require('node:http');
const PORT = 3000;
const servidor = http.createServer();
servidor.listen(PORT,function(){
    console.log("servidor corriendo en el puerto" + PORT)
});