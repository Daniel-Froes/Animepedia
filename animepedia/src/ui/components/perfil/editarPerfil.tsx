import Footer from "../footer/footer";
import HeaderLogado from "../header/headerLogado";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <h3>Editar Perfil</h3>
          <Container className="mt-5 mb-5">
            <Row>
              
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EditarPerfil;
