const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = {
  admin: async function (req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if(!authHeader){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Necessário realizar o login para acessar a página!"
        })
    }

    const [, token] = authHeader.split(' ');
    if(!token){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Necessário realizar o login para acessar a página!"
        })
    }
    try {
        const decode = await promisify(jwt.verify)(token, "$2a$12$Qd0FtHVmx8tYL4vID0JcwuopLMDSG9aZzGObrXgH0tvebiOO2GEXm");
        req.userId = decode.id
        return next();
    } catch (error) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Necessário realizar o login para acessar a página !"
        })
    }
  },
};
