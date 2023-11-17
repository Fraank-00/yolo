const usuariosController = {};

const usuarioModel = require('../../model/Mongose/usuarioModel');

//ver usuarios
usuariosController.verUsuarios = async (req , res) =>{

    try {
        const listaUsuarios = await usuarioModel.find();

        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno', error})
    }
    
}

usuariosController.verUsuario =async (req , res) =>{
    try {
        const {id} = req.params ;

        const usuarioEncontrado = await usuarioModel.findById(id);

        return res.json(usuarioEncontrado);
    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno al intentar obtener el usuario', error})
    }
    
}






usuariosController.crearUsuario = async (req , res) =>{

    try {
        const { nombres, apellidos} = req.body ;

       const nuevoUsuario = new usuarioModel ({
        nombres : nombres ,
        apellidos : apellidos,
     });
     await nuevoUsuario.save();

        return res.json({mensaje:'Usuario creado con Exito'});
    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno al crear el usuario', error})
    }

}


usuariosController.editarUsuario = async (req , res) =>{
    try {
        const { id,nombres , apellidos} = req.body ;

       
        await usuarioModel.findByIdAndUpdate(
            id,
            { nombres: nombres, apellidos:apellidos }, 
        );  

        return res.json({mensaje:'Usuario editado con Exito'});
    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno al editar el usuario', error})
    }
}


usuariosController.eliminarUsuario = async (req , res) =>{

    try {
        const {id} = req.body ;

       
        await usuarioModel.findByIdAndDelete(id)

        return res.json({mensaje:'Usuario eliminado con Exito'});
    } catch (error) {
        return res.status(500).json({mensaje: 'Ocurrio un error interno al eliminar el usuario', error})
    }

   
}




module.exports = usuariosController;