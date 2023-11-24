const { request } = require('express');
const Usuario = require ('../model/usuarioModel.js');

const usuarioController = {}
const lista_usuarios = [
    {nombre : 'Juan'},
    {nombre:'Carlos'}
];


//ver usuarios
usuarioController.verUsuarios = async (req , res) =>{

    try {
        const listaUsuarios = await Usuario.findAll();

        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno', error})
    }
    
}

// ver usuario

usuarioController.verUsuario = (req , res) =>{
    return res.json({mensaje:'Ruta: ver usuario'});
}
//crear usuario

usuarioController.crearUsuario =  async(req , res) =>{

    try {
        const {nombres , apellidos} = req.body;
        const nuevoUsuario = await Usuario.create({
            nombres: nombres ,
            apellidos: apellidos,
      });

      if (nuevoUsuario) {
        return res.json({mensaje: 'Usuario creado ..!'});
      }else{
        return res.status(500).json({mensaje: 'No se puedo crear el  usuario', error})
      }

    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno', error})
    }
}
//editar usuario
usuarioController.editarUsuario = (req , res) =>{
    return res.json({mensaje:'Ruta: editar usuario'});
}

//eliminar usuario

usuarioController.eliminarUsuario = async (req , res) =>{

    try { 
        const {id} = req.body;

        const eliminado = await Usuario.destroy({
            where: {
              id: id
            }
          });

          if (eliminado) {
            return res.json({mensaje: "Usuario eliminado correctamente"});
          }else{
            return res.status(500).json({mensaje: 'No se puedo eliminar el usuario', error});
          }
        
    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno', error});
    }
    
}

module.exports = usuarioController;