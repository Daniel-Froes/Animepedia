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
          </Glider>
        </div>
      </div>
    </>
  );
}
