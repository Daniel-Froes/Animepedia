'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Descricao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Descricao.init({
    resumo: DataTypes.STRING,
    autor: DataTypes.STRING,
    dataAt: DataTypes.INTEGER,
    status: DataTypes.STRING,
    temporadas: DataTypes.STRING,
    popularidade: DataTypes.STRING,
    ondeVer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Descricao',
  });
  return Descricao;
};