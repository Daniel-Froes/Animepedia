import Header from "../header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'

function Anime() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col> <img src= "/images/snk.jpg" /> </Col>
          <Col xs={5}>Attack on Titan</Col>
        </Row>
      </Container>
    </>
  );
}

export default Anime;