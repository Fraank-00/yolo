const {  DataTypes } = require('sequelize');
const {sequelize} = require ('../conf/sequelizeconf.js') ;

const Usuario = sequelize.define('Usuario', {
  // Model attributes are defined here
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false 
  }
}, {
  //
});

module.exports = Usuario