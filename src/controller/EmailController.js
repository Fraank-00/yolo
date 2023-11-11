const nodemailer = require("nodemailer");

const EmailControlller = {}

const transporter = nodemailer.createTransport({
    host: " smtp.mailgun.org",
    port:  587,
    secure: false,
    auth: {
  
        user: "postmaster@sandbox5d49b4b04944426896aa8ad3b34b750e.mailgun.org",
        pass: "95ddbe4130d3f767cd2d698078f239a6-8c9e82ec-fcafb57c",
    },
  });

EmailControlller.enviarEmail = async (req , res) =>{

  const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "shion0187@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });



 return res.json({mensaje : 'Ingreso  correctamente'})

}


module.exports = EmailControlller;