import Header from "../header/header";
import Footer from "../footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Posts() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Container fluid className="mt-5 mb-5 container-posts">
            <Row>
              <Col>
                <div className="post-template">
                  <h1 className="text-center">
                    LoL: Novas skins Zenith Games revivem uma temática esquecida
                    há anos
                  </h1>
                  <img
                    src="/images/made-in-abyss.jpg"
                    alt="foto-post"
                    className="img-post mt-4 mb-3"
                  />
                  <p className="p-posts mt-4">
                    A Riot Games já revelou os novos cosméticos que chegam ao
                    LoL no patch 12.17. Esta é uma nova coleção inspirada em
                    competições esportivas e traz novos aspectos para Lee Sin,
                    Blitzcrank e Jayce
                  </p>
                  <p className="p-posts mt-4">
                    Um novo ciclo de novidades chegou aos servidores de teste de
                    League of Legends e nos permitiu descobrir algumas das novas
                    skins que chegarão ao MOBA da Riot Games quando o patch
                    12.17 for lançado. Neste caso, é uma nova coleção de skins
                    com as quais a Riot Games tenta retornar a uma linha de
                    aspectos esportivos, a "Zenith Games ainda sem nome em
                    português".
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className="mt-5 mb-5 container-posts">
            <Row>
              <div>
                <Col>
                  <Form>
                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>
                        <h4>Comentários</h4>
                      </Form.Label>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Título</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Digite um título para seu comentário"
                            className="form-anime"
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Adicionar uma imagem</Form.Label>
                          <Form.Control type="file" className="form-anime" />
                        </Form.Group>
                      </Row>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="textarea"
                      />
                    </Form.Group>
                    <Button
                      variant="outline-light"
                      type="submit"
                      className="mb-3"
                    >
                      Comentar
                    </Button>
                  </Form>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Posts;
