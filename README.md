<h1 align="center">Animepedia</h1>

## Sobre o projeto

Animepedia agora está configurado como um projeto **apenas de front-end** em Next.js. Todas as interações de API são simuladas com dados mockados para que você possa navegar pelas telas, testar formulários e validar o design sem precisar de nenhum backend ou banco de dados.

## Como rodar

1. Instale as dependências do projeto de front-end:
   ```bash
   cd animepedia
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse [http://localhost:3000](http://localhost:3000) e explore a interface.

## O que mudou
- As chamadas de API agora retornam respostas mockadas para telas de login, cadastro e listagens de animes/mangás.
- Dependências de backend foram removidas, mantendo o projeto focado somente em front-end.

## Scripts úteis
- `npm run dev` – inicia o servidor de desenvolvimento.
- `npm run build` – gera a versão de produção estática.
- `npm run start` – sobe a build de produção localmente.
- `npm run lint` – executa a verificação do lint.

Sinta-se à vontade para adaptar os mocks em `src/data/mockData.js` caso queira testar outros cenários de UI.
