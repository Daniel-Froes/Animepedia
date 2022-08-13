<h1 align="center">Animepedia</h1>

## Sobre o projeto

A ideia principal é criar um site para notícias, indicações e informações.


*Você como usuário poderá:*


- [x] Cadastro de usuário
- [x] Criação de posts
- [x] Comentar sobre anime/informação/notícia
- [x] Avaliar animes/mangás
- [x] Interação na aba comunidade
- [x] Acesso a uma informação de qualidade e gratuita


<h4 align="center"> 
	🚧  Discord 🚀 Em construção...  🚧
</h4>


Instalar todas as dependências com `npm install` (dentro da pasta raiz).

Rodar o servidor com `npm run dev` .

## Gulp

Para criar o pacote de bundle do gulp-sass, executar o seguinte comando no terminal:

```sh
gulp bundleSass
```

Para deixar automático o gulp rodando em seu terminal, rodar o seguinte comando:

```sh
gulp devWatch
```

**package.json**

```json
{
  // ...
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
  // ...
}
```


**Caso queira alterar a pasta raiz de criação dos dados do sequelize basta criar um arquivo chamado `.sequelizerc` com o seguinte conteúdo:**

```js
const path = require("path");

module.exports = {
  config: path.resolve("./src/config", "config.json"),
  "models-path": path.resolve("./src/models"),
  "seeders-path": path.resolve("./src/seeders"),
  "migrations-path": path.resolve("./src/migrations"),
};
```

#### Migrations

Para executar a migration, colocar terminal o seguinte comando (dentro da pasta raiz):

```sh
npx sequelize-cli db:migrate
```

#### Desfazer uma migration

```sh
# Desfazendo as migrations
npx sequelize-cli db:migrate:undo:all
```

#### Seeders

Para rodar um mock de dados, escrevemos:

```sh
npx sequelize-cli db:seed:all
```

**Se quiser reverter uma seed e so executar:**


```sh
# Reverte a ultima seed

npx sequelize-cli db:seed:undo
```

```sh
# Reverte uma seed específica

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

```sh
# Reverte todas seeds

npx sequelize-cli db:seed:undo:all
```