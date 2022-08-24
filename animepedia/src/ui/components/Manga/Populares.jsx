import Header from "../header/header";
import Footer from "../footer/footer";
import SliderNews from "../index/sliderNews";
import { useState, useEffect } from 'react';
import { ApiService } from "../../../data/services/ApiService";

function Populares(){
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        ApiService(`descricao/1`, {
          method: "GET",
        }).then((data) => {
          console.log(data);
          setGeneros(data.body);
        });
      }, [""]);

    return (
        <>
            <Header />
            <main>
                <div>
                    <h2 className="mt-5">Mangás mais populares</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2> Populares de Ação e Aventura</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2> Populares de Terror</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2> Populares de Romance</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2> Populares de Esportes</h2>
                    <SliderNews />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Populares;