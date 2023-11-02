const autenticacionRouter =require('express').Router();
const{
    autenticar,
    registrar,
    verificarToken
}=require('../controller/AutenticacionController');

autenticacionRouter.post('/autenticar', autenticar);

autenticacionRouter.post('/verificarToken', verificarToken);




module.exports=autenticacionRouter