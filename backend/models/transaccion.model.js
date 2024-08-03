// models/transaccion.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import Cliente from './cliente.model.js';

const Transaccion = sequelize.define('Transaccion', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'transacciones',
  timestamps: false
});

Cliente.hasMany(Transaccion, { foreignKey: 'cliente_id' });
Transaccion.belongsTo(Cliente, { foreignKey: 'cliente_id' });

export default Transaccion;
