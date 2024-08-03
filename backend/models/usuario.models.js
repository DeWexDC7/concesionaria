// models/usuario.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Rol = require('./rol.model');  // Asegúrate de importar el modelo Rol

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Rol,
      key: 'id'
    }
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

module.exports = Usuario;
