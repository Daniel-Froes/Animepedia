var express = require("express");
const usuarios = require("../controllers/usuariosController");
var router = express.Router();

router.get("/", usuarios.index);

module.exports = router;