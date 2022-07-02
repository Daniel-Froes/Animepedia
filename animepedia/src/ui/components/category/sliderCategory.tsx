import Glider from "react-glider";
import "glider-js/glider.min.css";


export default function Teste() {
  return (
    <div className="App">
      <h1></h1>
      <p>
        <a href="https://hipstersmoothie.github.io/react-glider/">

        </a>
      </p>
      <p>
        <a href="https://www.npmjs.com/package/react-glider"></a>
        {" - "}
        <a href="https://github.com/hipstersmoothie/react-glider"></a>
      </p>
      <div className="container">
        <Glider slidesToShow={1} scrollLock hasDots draggable>
          <div className="slide">1</div>
          <div className="slide">2</div>
          <div className="slide">3</div>
          <div className="slide">4</div>
          <div className="slide">5</div>
          <div className="slide">6</div>
          <div className="slide">7</div>
          <div className="slide">8</div>
          <div className="slide">9</div>
          <div className="slide">10</div>
          <div className="slide">11</div>
          <div className="slide">12</div>
        </Glider>
      </div>
      <div className="container">
        <Glider
          hasArrows
          slidesToShow={3}
          slidesToScroll={3}
          scrollLock
          hasDots
        >
          <div className="slide">1</div>
          <div className="slide">2</div>
          <div className="slide">3</div>
          <div className="slide">4</div>
          <div className="slide">5</div>
          <div className="slide">6</div>
          <div className="slide">7</div>
          <div className="slide">8</div>
          <div className="slide">9</div>
          <div className="slide">10</div>
          <div className="slide">11</div>
          <div className="slide">12</div>
        </Glider>
      </div>
    </div>
  );
}
