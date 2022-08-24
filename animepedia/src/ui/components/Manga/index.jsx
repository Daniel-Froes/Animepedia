import Header from "../header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Footer from "../footer/footer";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function Manga() {
  const [mangas, setMangas] = useState([]);

    useEffect(() => {
        httpRequest(`descricao/${id}`, {
          method: "GET",
        }).then((data) => {
          console.log(data);
          setMangas(data.body);
        });
      }, [""]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        {mangas.map((manga) => (
          <Row>
          <Col> <img src= "/images/snk.jpg" className="img-anime"/> </Col>
          <Col xs={6} >
            <h2 className="text-anime">{manga.titulo}</h2>
            <p className="text-anime">{manga.subtitulo}</p>
            <p className="text-anime">{manga.comentario}</p>
            <p className="text-anime">{manga.autor}:</p>          
            <p className="text-anime">{manga.genero}:</p>          
            <p className="text-anime" >{manga.data}:</p>          
            <p className="text-anime">{manga.status}:</p>          
            <p className="text-anime">{manga.duracao}:</p>                   
            <p className="text-anime">{manga.ondeAssistir}:</p>          
          </Col>
        </Row>
        ))}
        
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

export default Manga;