import Carousel from "react-bootstrap/Carousel";

function SliderBigIndex() {
  return (
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
            src="/images/the-promised-neverland.jpg"
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
  );
}

export default SliderBigIndex;
