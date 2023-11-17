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

usuarioController.crearUsuario = (req , res) =>{
    return res.json({mensaje:'Ruta: crear usuario'});
}
//editar usuario
usuarioController.editarUsuario = (req , res) =>{
    return res.json({mensaje:'Ruta: editar usuario'});
}

//eliminar usuario

usuarioController.eliminarUsuario = (req , res) =>{
    return res.json({mensaje:'Ruta: eliminar usuario'});
}

module.exports = usuarioController;