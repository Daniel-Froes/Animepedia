'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Comentarios.init({
    comentario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comentarios',
  });
  return Comentarios;
};