import Glider from "react-glider";
import "glider-js/glider.min.css";
import CardNews from "./card";

export default function SliderNews() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Glider
            hasArrows
            slidesToShow={3.5}
            slidesToScroll={1}
            scrollLock
            hasDots
          >
            <div className="slide"><CardNews/></div>
            <div className="slide"><CardNews/></div>
            <div className="slide"><CardNews/></div>
            <div className="slide"><CardNews/></div>
            <div className="slide"><CardNews/></div>
            <div className="slide"><CardNews/></div>
            <div className="slide">oi</div>
            <div className="slide">8</div>
            <div className="slide">9</div>
            <div className="slide">10</div>
            <div className="slide">11</div>
            <div className="slide">12</div>
          </Glider>
        </div>
      </div>
    </>
  );
}
