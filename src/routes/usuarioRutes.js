const usuarioRouter =require('express').Router();
const {verUsuarios,
        verUsuario,
        crearUsuario,
        editarUsuario,
        eliminarUsuario,
} = require('../controller/usuarioControllers');

//ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);

// ver usuario

usuarioRouter.get('/usuario', verUsuario);

//crear usuario

usuarioRouter.post('/usuario',crearUsuario);

//editar usuario
usuarioRouter.put('/usuario',editarUsuario);

//eliminar usuario

usuarioRouter.delete('/usuario',eliminarUsuario);

module.exports = usuarioRouter ;