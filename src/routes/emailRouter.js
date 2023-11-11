const emailRouter = require('express').Router();
const { enviarEmail } = require('../controller/EmailController.js');

emailRouter.post('/enviarEmail', (req, res) => {
    enviarEmail(req, res).catch((error) => {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ mensaje: 'Error al enviar el correo' });
    });
});

module.exports = emailRouter;
