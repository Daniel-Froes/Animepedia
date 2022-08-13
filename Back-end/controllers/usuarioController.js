require("dotenv").config();
const Usuario = require("../models").Usuario;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UsuarioController {
  static listarTodosUsuarios = async (req, res) => {
    try {
      const allUsers = await Usuario.findAll();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  static umUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      const getUser = await Usuario.findOne({
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

    dados.senha = await bcrypt.hashSync(dados.senha, 8);

    console.log(dados);

    await Usuario.create(dados)
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
      updateUserInfo.senha = await bcrypt.hashSync(updateUserInfo.senha, 8);

      await Usuario.update(updateUserInfo, {
        where: { id: Number(id) },
      });
      const updatedAtUser = await Usuario.findOne({
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
      await Usuario.destroy({
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
    const Usuarios = await Usuario.findOne({
      attributes: ["id", "nome", "sobrenome", "nickname", "senha"],
      where: {
        email: req.body.email,
      },
    });

    if (Usuario === null) {
      return res.status(400).json({
        error: true,
        mensagem: "Usuário ou a senha incorreto!",
      });
    }

    if (!(await bcrypt.compare(req.body.senha, Usuarios.senha))) {
      return res.status(400).json({
        error: true,
        mensagem: "Usuário ou a senha incorreto!",
      });
    }
    const token = jwt.sign({ id: Usuario.id }, "1234", { expiresIn: '60 days' });
    res.cookie('nToken', token, { maxAge: 900000, httpOnly: true })
    console.log(token)
    return res.redirect('/');
  };
    
    
}


module.exports = UsuarioController;
