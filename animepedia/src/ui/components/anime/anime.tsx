import Header from "../header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Footer from "../footer/footer";
import Button from 'react-bootstrap/Button';

function Anime() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col> <img src= "/images/snk.jpg" className="img-anime"/> </Col>
          <Col xs={6}>
            <h2>Attack on Titan</h2>
            <p>Shingeki no Kyojin</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat totam cum omnis quos necessitatibus! Reprehenderit in nisi earum esse excepturi architecto sed, maiores, molestias fuga repellendus quaerat obcaecati nam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat totam cum omnis quos necessitatibus! Reprehenderit in nisi earum esse excepturi architecto sed, maiores, molestias fuga repellendus quaerat obcaecati nam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat totam cum omnis quos necessitatibus! Reprehenderit in nisi earum esse excepturi architecto sed, maiores, molestias fuga repellendus quaerat obcaecati nam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat totam cum omnis quos necessitatibus! Reprehenderit in nisi earum esse excepturi architecto sed, maiores, molestias fuga repellendus quaerat obcaecati nam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat totam cum omnis quos necessitatibus! Reprehenderit in nisi earum esse excepturi architecto sed, maiores</p>
            <p>Autor:</p>          
            <p>Gênero:</p>          
            <p>Data de Lançamento:</p>          
            <p>Status:</p>          
            <p>Duração:</p>          
            <p>Popularidade:</p>          
            <p>Onde Assistir:</p>          
          </Col>
        </Row>
        <Form>
          
      <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1" >
        <Form.Label >
          <h4>Comentários</h4>
        </Form.Label>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Digite um título para seu comentário" className="form-anime" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Adicionar uma imagem</Form.Label>
        <Form.Control type="file" className="form-anime"/>
        </Form.Group>
      </Row>
      <Form.Control as="textarea" rows={3} className="textarea"/>
      </Form.Group>
      <Button variant="outline-success" type="submit" className="mb-3">
        Comentar
      </Button>
      </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Anime;