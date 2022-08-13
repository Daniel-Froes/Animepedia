import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../footer/footer";
import HeaderLogin from "../header/headerLogin";

function FormLogin() {
  return (
    <>
      <HeaderLogin />
      <main className="login-container ">
        <Form className="my-5 mx-5 ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>
          <BsArrowRight/>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
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
}

export default FormLogin;
