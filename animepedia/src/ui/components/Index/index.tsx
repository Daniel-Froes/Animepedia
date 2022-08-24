import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/header";
import SliderBigIndex from "./sliderIndex";
import Footer from "../Footer/footer";
import SliderNews from "./sliderNews";
import CardGroups from "../Card/cardGroups";

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
