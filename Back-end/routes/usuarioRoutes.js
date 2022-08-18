require("dotenv").config();
const express = require("express");
const router = express.Router();
const { admin } = require("../middlewares/auth");
const usuarioController = require("../controllers/usuarioController");



router.get('/api/v1/logout', (req, res) => {
  res.clearCookie('nToken');
  return res.redirect('/');
});



router
  .get("/api/v1/usuarios", usuarioController.listarTodosUsuarios)
  .get("/api/v1/usuarios/:id", usuarioController.umUsuario)
  .post("/api/v1/usuarios", usuarioController.cadastro)
  .post("/api/v1/usuarios/login", usuarioController.login)
  .put("/api/v1/usuarios/:id", admin, usuarioController.editarUsuario)
  .delete("/api/v1/usuarios/:id", usuarioController.deletarUsuario);


module.exports = router;
