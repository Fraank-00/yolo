const usuarioRouter =require('express').Router();
const {verUsuarios,
        verUsuario,
        crearUsuario,
        editarUsuario,
        eliminarUsuario,
} = require('../controller/usuarioControllers');

const  {
  verUsuarios: verUsuariosMongose,
  crearUsuario : crearUsuarioMongoose,
  editarUsuario: editarUsuarioMongoose,
  eliminarUsuario: eliminarUsuarioMongoose,
  verUsuario: verUsuarioMongoose,
} = require('./../controller/moongose/UsuariosController');




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



// Ver usuarios (Moongose)

usuarioRouter.get('/m/usuarios',verUsuariosMongose );


// ver usuario (Mongoose)

usuarioRouter.get('/m/usuario/:id', verUsuarioMongoose);

// Crear usuarios (Moongose)

usuarioRouter.post('/m/usuario',crearUsuarioMongoose );

// Editar usuario (Mongoose)

usuarioRouter.put('/m/usuario',editarUsuarioMongoose);

//eliminar usuario (Mongoose)

usuarioRouter.delete('/m/usuario',eliminarUsuarioMongoose);



module.exports = usuarioRouter ;