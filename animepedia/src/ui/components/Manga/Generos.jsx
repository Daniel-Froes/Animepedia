import Header from "../header/header";
import Footer from "../footer/footer";
import SliderNews from "../index/sliderNews";
import { useState, useEffect } from 'react';
import { ApiService } from "../../../data/services/ApiService";

function Generos(){
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
                <h1 className="mt-5">Gêneros</h1>
                <div>
                    <h2 className="mt-5">Ação e aventura</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2 className="mt-5"> Terror e Suspense</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2 className="mt-5"> Romance</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2 className="mt-5" > Esportes</h2>
                    <SliderNews />
                </div>
               
            </main>
            <Footer />
        </>
    )
}

export default Generos;