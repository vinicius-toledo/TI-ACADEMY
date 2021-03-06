'use strict';
const {
  Model
} = require('sequelize');
const servico = require('./servico');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Cliente);
      Pedido.belongsTo(models.Servico);
    }
  };
  Pedido.init({
    idCliente: DataTypes.INTEGER,
    idServico: DataTypes.INTEGER,
    valor: DataTypes.FLOAT(6,2),
    data : DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};