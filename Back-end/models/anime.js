"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime.hasMany(models.descricao, {
        foreignKey: "descricao_id",
      });
      Anime.hasMany(models.comentarios, {
        foreignKey: "comentario_id",
      });
    }
  }
  Anime.init(
    {
      nome: DataTypes.STRING,
      subtitulo: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Anime",
    }
  );
  return Anime;
};
