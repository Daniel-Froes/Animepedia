'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Usuario.hasMany(models.comentarios,{
      foreignKey: 'comentario_id'
     })
     Usuario.hasMany(models.post,{
      foreignKey: 'post_id'
     })
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    sobreNome: DataTypes.STRING,
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};