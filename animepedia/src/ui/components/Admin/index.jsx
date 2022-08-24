import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderLogado from "../Header/headerLogado";
import { BsHouseFill, BsFilePost, BsBookmarksFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import Table from "react-bootstrap/Table";
import Footer from "../Footer/footer";
import CriarPost from "../Container/criarPost";
import CriarAnime from "../Container/criarCategoria";

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
                    <CriarPost />
                  </Col>
                </Row>
                <Row>
                  <Col className="container-post mt-5 mb-5">
                    <p className="text-center text-container mt-3">Criar Categorias</p>
                    <CriarAnime />
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
