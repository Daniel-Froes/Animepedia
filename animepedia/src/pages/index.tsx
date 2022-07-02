import type { NextPage } from 'next'
import "bootstrap/dist/css/bootstrap.css";
import Header from '../ui/components/header/header';
import Footer from '../ui/components/footer/footer';

import Teste from '../ui/components/sliderCategory/sliderCategory';
import SliderBigIndex from '../ui/components/sliderCategory/sliderIndex';


const Home: NextPage = () => {
  return (
   <>
    
    <Header/>
    <SliderBigIndex/>
    <Footer/>

   </>
  )
}

export default Home