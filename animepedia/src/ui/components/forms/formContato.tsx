import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../header/header";
import Footer from "../footer/footer";

function FormContato() {
  return (
    <>
      <Header />
      <main>
        <Form>
          <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título da sua mensagem"
              className="form-anime"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="seu@email.com"
              className="form-anime"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="form-anime textarea"
            />
          </Form.Group>
          <div className="botao-centralizado">
            <Button variant="outline-dark" className="mb-5 ">
              Enviar
            </Button>
          </div>
        </Form>
      </main>
      <Footer />
    </>
  );
}

export default FormContato;
