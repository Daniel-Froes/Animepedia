//Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../footer/footer";
import HeaderLogin from "../header/headerLogin";

//Services
import { useState } from "react";
import { ApiService} from '../../../data/services/ApiService'


function FormLogin () {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dados = {
      email: email,
      password: senha,
    };
    ApiService(`api/v1/usuarios/login`, {
      method: "POST",
      body: dados,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.body);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <HeaderLogin />
      <main className="login-container ">
        <Form onSubmit={handleSubmit} className="my-5 mx-5 ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar de mim" />
          </Form.Group>
          <div>
            <Button
              className="botao-form ms-5 "
              variant="outline-success"
              type="submit"
            >
              Iniciar Sessão
            </Button>
            <Button
              className="botao-form mx-2"
              variant="outline-success"
              type="submit"
            >
              Registre-se
            </Button>
          </div>
        </Form>
      </main>
      <div className="footer-forms">
        <Footer />
      </div>
    </>
  );
};

export default FormLogin;
