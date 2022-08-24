import Header from "../header/header";
import Footer from "../footer/footer";
import SliderNews from "../index/sliderNews";

function Lancamento(){
    return (
        <>
            <Header />
            <main>
                <div>
                    <h2 className="mt-5">Animes Recém-Adicionados</h2>
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