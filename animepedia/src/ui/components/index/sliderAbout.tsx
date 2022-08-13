import Carousel from "react-bootstrap/Carousel";

function SliderAbout() {
  return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 imagem-carrossel"
            src="/images/roxo.png"
            alt="First slide"
          />
        </Carousel.Item>
</Carousel>
);
}

export default SliderAbout;