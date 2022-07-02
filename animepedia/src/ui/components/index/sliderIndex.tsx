import Carousel from "react-bootstrap/Carousel";

function SliderBigIndex() {
  return (
    <main>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 imagem-carrossel"
            src="/images/officialtrailer.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 imagem-carrossel"
            src="/images/snk.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 imagem-carrossel"
            src="images/chainsawman.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </main>
  );
}

export default SliderBigIndex;
