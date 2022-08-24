import Header from "../header/header";
import Footer from "../footer/footer";
import SliderNews from "../index/sliderNews";
import { useState, useEffect } from 'react';
import { ApiService } from "../../../data/services/ApiService";

function Lancamento(){
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
                    <h2 className="mt-5">Mangás Recém-Adicionados</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2> Na última semana</h2>
                    <SliderNews />
                </div>
                <div>
                    <h2> Nesse mês</h2>
                    <SliderNews />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Lancamento;