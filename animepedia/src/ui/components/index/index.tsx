import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header/header";
import SliderBigIndex from "./sliderIndex";
import Footer from "../footer/footer";
import SliderNews from "./sliderNews";
import CardGroups from "../card/cardGroups";

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <SliderBigIndex />
        <CardGroups />
        <SliderNews />
      </main>
      <Footer />
    </>
  );
};

export default Index;
