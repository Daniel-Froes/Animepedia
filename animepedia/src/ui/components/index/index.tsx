import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/header";
import SliderBigIndex from "./sliderIndex";
import Footer from "../footer/footer";
import SliderNews from "./sliderNews";

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <SliderBigIndex />
      <SliderNews/>
      <Footer />
    </>
  );
};

export default Index;
