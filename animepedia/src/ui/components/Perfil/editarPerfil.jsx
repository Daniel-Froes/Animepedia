import Footer from "../Footer/footer";
import HeaderLogado from "../Header/headerLogado";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditarPerfil() {
  return (
    <>
      <HeaderLogado />
      <main>
        <div className="mt-5 mb-5 perfil-editar">
          <Image
            className="imagem-login"
            src="/images/hinata.jpg"
            width="170"
            height="170"
          />
          <p className="user-perfil">isocabp</p>
        </div>
        <div>
          <h3 className="text-center">Editar Perfil</h3>
          <Container className="login-container">
          <Form className="mt-5 mb-5" enctype="multipart/form-data">
          <Row className="mb-3">
            <Form.Group controlId="formGridPassword">
              <Form.Label>Atualizar nickname</Form.Label>
              <Form.Control type="text" placeholder="@bananinhaTitanica" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group  controlId="formGridEmail">
              <Form.Label>Atualizar Email</Form.Label>
              <Form.Control type="email" placeholder="Seu email" />
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Atualizar Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
            <Form.Text className="text-muted">
              Sua senha deve ter de 6 a 20 caracteres, conter letras e números e
              não deve conter espacços, caracteres especiais ou emojis.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridPassword" className="mt-3">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Form.Group controlId="formFile" className="mt-3 mb-5">
            <Form.Label>Atualizar imagem de perfil</Form.Label>
            <Form.Control type="file" name="avatar"/>
          </Form.Group>
          <div className="botao-centralizado">
            <Button  variant="outline-light" type="submit">
              Salvar
            </Button>
          </div>
        </Form>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EditarPerfil;
