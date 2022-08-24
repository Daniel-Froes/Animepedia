import Header from "../header/header";
import Footer from "../footer/footer";
import SliderNews from "../index/sliderNews";

function Populares(){
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