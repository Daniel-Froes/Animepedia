const express = require("express");
var cors = require('cors')
const usuarios = require("./usuarioRoutes");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ 
      resultado: "0.0.1 - ALPHA"
    });
  });

  app.use(
    cors(),
    express.json(), 
    usuarios,
    );
};

module.exports = routes;