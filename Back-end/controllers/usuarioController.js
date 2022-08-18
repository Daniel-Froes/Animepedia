require("dotenv").config();
const Usuarios = require("../models").Usuarios;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class usuariosController {
  constructor(Usuarios) {
    this.senhaHash = Usuarios.senhaHash;
  }

  static gerarSenhaHash(senha) {
    const custoHash = 12;
    return bcrypt.hashSync(senha, custoHash);
  }

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
    console.log(dados);
    console.log(dados.senha);

    this.senhaHash = usuariosController.gerarSenhaHash(dados.senha);

    dados.senha = this.senhaHash;

    console.log(this.senhaHash);

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
      this.senhaHash = usuariosController.gerarSenhaHash(updateUserInfo.senha);
      updateUserInfo.senha = this.senhaHash;
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
      attributes: ["id", "nome", "sobrenome", "email", "nickname", "senha"],
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
    
    if (!(bcrypt.compare("req.body.senha", "Usuario.senhaHash"))) {
      return res.status(400).json({
        error: true,
        mensagem: "Usuário ou a senha incorreto!",
        
      });
      
    }
    const token = jwt.sign({ id: Usuario.id }, "$2a$12$Qd0FtHVmx8tYL4vID0JcwuopLMDSG9aZzGObrXgH0tvebiOO2GEXm", {
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
