import { mockDescriptions, mockUserProfile } from "../mockData";

const mockResponseMap = {
  "descricao/1": () => ({
    status: 200,
    body: mockDescriptions,
  }),
  descricao: () => ({
    status: 201,
    body: { message: "Conteúdo armazenado apenas para demonstração no front-end." },
  }),
  "usuarios/login": () => ({
    status: 200,
    body: { token: "mock-token", user: mockUserProfile },
  }),
  usuarios: () => ({
    status: 201,
    body: {
      message: "Cadastro registrado localmente (modo somente front-end).",
      user: mockUserProfile,
    },
  }),
};

export const ApiService = async (path, config = {}) => {
  const key = path.toLowerCase();
  const responseFactory = mockResponseMap[key];

  if (responseFactory) {
    return new Promise((resolve) => setTimeout(() => resolve(responseFactory()), 150));
  }

  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          status: 200,
          body: {
            message: "Operação simulada: este repositório está configurado apenas para o front-end.",
            payload: config.body ?? null,
          },
        }),
      150
    )
  );
};
