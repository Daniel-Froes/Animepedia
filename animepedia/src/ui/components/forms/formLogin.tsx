import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLogin() {
  return (
    <main>
        <Form className="mt-5 mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar de mim" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
            Iniciar Sessão
        </Button>
        </Form>
    </main>
  );
}

export default FormLogin