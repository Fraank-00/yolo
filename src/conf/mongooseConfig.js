const mongoose = require('mongoose');

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const conectMongo = async () => {

    try {
     
        await mongoose.connect(MONGO_DB_URI );
        console.log('Exito')
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error.message);
    }


};

module.exports = conectMongo