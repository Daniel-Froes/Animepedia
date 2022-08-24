import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Footer from "../Footer/footer";
import HeaderLogin from "../Header/headerLogin";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../data/services/ApiService";

function FormCadastro() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {},
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const dados = {
      nome: data.nome,
      nickname: data.nickname,
      email: data.email,
      genero: data.genero,
      senha: data.password,
      image: data.image,
      confirma_senha: data.confirm_password,
    };

    ApiService(`usuarios`, {
      method: "POST",
      body: dados,
    })
      .then((res) => {
        if (res.status === 200) {
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <HeaderLogin />
      <main className="login-container">
        <Form className="mt-5 mb-5" onSubmit={handleSubmit} enctype="multipart/form-data">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                {...register("nome", {
                  required: "Nome obrigatório",
                })}
                placeholder="Seu nome"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nome de usuário</Form.Label>
              <Form.Control
                type="text"
                {...register("nickname", {
                  required: "nickname obrigatório",
                })}
                placeholder="@bananinhaTitanica"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              {...register("email", {
                required: "Email obrigatório",
              })}
              placeholder="Seu email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Gênero</Form.Label>
              <Form.Select 
              defaultValue="Choose..."
              {...register("genero", {
                required: "Gênero obrigatório",
              })}
              >
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Não-binário</option>
                <option>Outro</option>
                <option>Prefiro não falar</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control 
            type="password" 
            {...register("senha", {
              required: "Senha obrigatória",
            })}
            placeholder="Senha" />
            <Form.Text className="text-muted">
              Sua senha deve ter de 6 a 20 caracteres, conter letras e números e
              não deve conter espacços, caracteres especiais ou emojis.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridPassword" className="mt-3">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control 
            type="password" 
            {...register("confirma_senha", {
              required: "Senha obrigatória",
            })}
            placeholder="Senha" />
          </Form.Group>

          <Form.Group controlId="formFile" className="mt-3 mb-5">
            <Form.Label>Selecione sua imagem de perfil</Form.Label>
            <Form.Control 
            type="file"
            name="avatar"
            {...register("image", {
              required: "Imagem obrigatória",
            })}
            />
          </Form.Group>
          <div className="botao-centralizado">
            <Button variant="outline-light" type="submit">
              Registrar
            </Button>
          </div>
        </Form>
      </main>
      <div className="footer-forms">
        <Footer />
      </div>
    </>
  );
}

export default FormCadastro;
