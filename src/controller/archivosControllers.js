const  archivosControllers = {}

const rutaPrincipal =  __dirname + '/../../tmp/';

archivosControllers.subirArchivo = (req , res) => {
    try{
        const archivo = (req.files.miArchivo);
        const  rutaGuardar= rutaPrincipal + archivo.name;
        archivo.mv(rutaGuardar,function(err) {
            if (err){
            return res.status(500).json({mensaje: err});
            }else{
            return res.json({mensaje:'El archivo se subio correctamente'})}
        });

    } catch (err){
        return res.status(500).json({error:'Ocurrio un error al subir el archivo'}
     )}
    
}
module.exports = archivosControllers;