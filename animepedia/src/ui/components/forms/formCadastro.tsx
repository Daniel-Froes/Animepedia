import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormCadastro() {
  return (
    <main>
        <Form className="mt-5 mb-5">
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Seu nome" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control type="text" placeholder="@bananinhaTitanica" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gênero</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Não-binário</option>
                <option>Outro</option>
                <option>Prefiro não falar</option>
            </Form.Select>
            </Form.Group>            
        </Row>

            <Form.Group  controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
            <Form.Text className="text-muted">
            Sua senha deve ter de 6 a 20 caracteres, conter letras e números e não deve conter espacços, caracteres especiais ou emojis.
            </Form.Text>
            </Form.Group>

            <Form.Group  controlId="formGridPassword" className='mt-3'>
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
            </Form.Group>


        <Form.Group className="mb-2 mt-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Lembrar de mim" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>

        <Form.Group controlId="formFile" className="mt-3 mb-5">
            <Form.Label>Selecione sua imagem de perfil</Form.Label>
            <Form.Control type="file" />
        </Form.Group>
        </Form>
        
    </main>
  );
  
}

export default FormCadastro;