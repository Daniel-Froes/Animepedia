import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderLogado from "../header/headerLogado";
import { BsHouseFill, BsFilePost, BsBookmarksFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Footer from "../footer/footer";

function PageAdmin() {
  return (
    <>
      <HeaderLogado />
      <main></main>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <div className="first-container">
              <p className="text-container">
                <BsHouseFill className="icon-container" /> Home
              </p>
              <p className="text-container">
                <BsFilePost className="icon-container" /> Posts
              </p>
              <p className="text-container">
                <FiUsers className="icon-container" /> Users
              </p>
              <p className="text-container">
                <BsBookmarksFill className="icon-container" /> Categorias
              </p>
            </div>
          </Col>
          <Col xs={10}>
            <div className="second-container">
              <Container>
                <Row>
                  <Col className="container-post">
                    <p className="text-center text-container mt-3">
                      Criar Posts
                    </p>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Título</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Categoria</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>Anime</option>
                            <option>Mangá</option>
                            <option>Geral</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Comentário</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Selecione uma imagem</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
                      </Row>
                      <Button
                        variant="outline-light"
                        type="submit"
                        className="botao-post  mb-3"
                      >
                        Enviar
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col className="container-post mt-5 mb-5">
                    <p className="text-center text-container mt-3">
                      Criar Categorias
                    </p>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Título</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Subtítulo</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Categoria</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>Anime</option>
                            <option>Mangá</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Data de Lançamento</Form.Label>
                          <Form.Control type="date" />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Autor</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Status</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Duração</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Gênero</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>Ação/Aventura</option>
                            <option>Romance</option>
                            <option>Terror</option>
                            <option>Esporte</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Onde Assistir</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Comentário</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Selecione uma imagem</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
                      </Row>
                      <Button
                        variant="outline-light"
                        type="submit"
                        className="botao-post  mb-4"
                      >
                        Enviar
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
                <p className="titulo-users">Lista de usuários</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Nickname</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Isabella Borges</td>
                    <td>isokinha</td>
                    <td>isabellab.ferreira5@gmail.com</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Daniel Froes</td>
                    <td>danielzin</td>
                    <td>danielfroes@gmail.com</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>teste</td>
                    <td>testee</td>
                    <td>teste@teste.com</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default PageAdmin;
