'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime.hasOne(models.descricao, {
        foreignKey: 'descricao_id'
      })
    }
  }
  Anime.init({
    name: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};