'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comentario.belongsTo(models.usuario,{
        foreignKey: 'usuario_comentario_id'
      })
    }
  }
  Comentario.init({
    comentario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};