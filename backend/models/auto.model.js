// models/auto.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import Cliente from './cliente.model.js';

const Auto = sequelize.define('Auto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  }
}, {
  tableName: 'autos',
  timestamps: false
});

Cliente.hasMany(Auto, { foreignKey: 'cliente_id' });
Auto.belongsTo(Cliente, { foreignKey: 'cliente_id' });

export default Auto;
