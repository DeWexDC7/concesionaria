// models/permiso.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Rol = require('./rol.model');  // Asegúrate de importar el modelo Rol

const Permiso = sequelize.define('Permiso', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Rol,
      key: 'id'
    }
  },
  nombre_permiso: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'permisos',
  timestamps: false
});

Rol.hasMany(Permiso, { foreignKey: 'rol_id' });
Permiso.belongsTo(Rol, { foreignKey: 'rol_id' });

module.exports = Permiso;
