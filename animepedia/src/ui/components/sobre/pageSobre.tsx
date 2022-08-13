import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Footer from "../footer/footer";
import SliderAbout from "../index/sliderAbout";
import HeaderAbout from "../header/headerAbout";
import CardAbout from "../card/cardAbout";


function PageSobre() {
  return (
    <>
      <HeaderAbout />
      <SliderAbout />
      <main>
        <Container>
          <Row className=" mt-5">
            <Col>
              <h3 className="text-center">
                {" "}
                Animepedia é um blog de informações de animes e mangás e que
                promove a arte e a cultura do anime para uma comunidade de fãs
                apaixonados.
              </h3>
            </Col>
          </Row>
        </Container>
        <h3 className="text-center mt-4 mb-5">
          Aqui você pode encontrar sua comunidade e ter a liberdade de ser quem
          você é
        </h3>
        <CardAbout />
        <Container className="mt-5">
          <Col>
            <h2>Quem somos</h2>
          </Col>
          <Row className="mt-3">
            <Col>
              <h4 >Daniel Froes</h4>
              <Figure>
                <Figure.Image
                  width={300}
                  height={200}
                  alt="171x180"
                  src="/images/daniel.jfif"
                  className="img-about mt-3 mx-auto d-block "
                />
                <p className="mt-3 text-center"> Seu resumin aqui</p>
              </Figure>
            </Col>
            <Col>
            <h4 className="text-center">Isabella Borges</h4>
              <Figure>
                <Figure.Image
                  width={300}
                  height={200}
                  alt="171x180"
                  src="/images/isa.jpg"
                  className="img-about mt-3 mx-auto d-block "
                />
                <p className="mt-3 text-center"> Tenho 23 anos, moro no Rio de Janeiro e sou desenvolvedora FullStack com experiência em Front-end. </p>

              </Figure></Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default PageSobre;
