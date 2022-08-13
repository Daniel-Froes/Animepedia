require("dotenv").config();
const Usuarios = require("../models").Usuarios;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



class usuariosController {
  static listarTodosUsuarios = async (req, res) => {
    try {
      const allUsers = await Usuarios.findAll();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  static umUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      const getUser = await Usuarios.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(getUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static cadastro = async (req, res) => {
    const dados = req.body;

    
    
    bcrypt.hash(dados.senha, 8, function(err, hash) {
      return dados.senha
  });

    console.log(dados);

    await Usuarios.create(dados)
      .then(() => {
        return res.json({
          erro: false,
          mensagem: "Usuário cadastrado com sucesso",
        });
      })
      .catch(() => {
        return res.status(400).json({
          erro: true,
          mensagem: "Erro ao cadastrar usuário",
        });
      });
  };

  static editarUsuario = async (req, res) => {
    const { id } = req.params;
    const updateUserInfo = req.body;
    try {
      bcrypt.hash(updateUserInfo.senha, 8, function(err, hash) {
        return updateUserInfo
    });
  
      await Usuarios.update(updateUserInfo, {
        where: { id: Number(id) },
      });
      const updatedAtUser = await Usuarios.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(updatedAtUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static deletarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      await Usuarios.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static login = async (req, res) => {
    const Usuario = await Usuarios.findOne({
      attributes: ["id", "nome", "cpf", "email", "senha", "status"],
      where: {
        email: req.body.email,
      },
    });

    if (Usuarios === null) {
      return res.status(400).json({
        error: true,
        mensagem: "Usuário ou a senha incorreto!",
      });
    }

    if (!(await bcrypt.compare(req.body.senha, Usuario.senha))) {
      return res.status(400).json({
        error: true,
        mensagem: "Usuário ou a senha incorreto!",
      });
    }
    const token = jwt.sign({ id: Usuario.id }, '1234', {
      expiresIn: 600,
    });

    return res.json({
      erro: false,
      mensagem: "Login realizado com sucesso!",
      token,
    });
  };
}

module.exports = usuariosController;
