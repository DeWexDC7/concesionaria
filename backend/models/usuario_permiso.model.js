// models/usuario_permiso.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Usuario = require('./usuario.model');  // Asegúrate de importar el modelo Usuario
const Permiso = require('./permiso.model');  // Asegúrate de importar el modelo Permiso

const UsuarioPermiso = sequelize.define('UsuarioPermiso', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  permiso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Permiso,
      key: 'id'
    }
  }
}, {
  tableName: 'usuarios_permisos',
  timestamps: false
});

Usuario.belongsToMany(Permiso, { through: UsuarioPermiso, foreignKey: 'usuario_id' });
Permiso.belongsToMany(Usuario, { through: UsuarioPermiso, foreignKey: 'permiso_id' });

module.exports = UsuarioPermiso;
