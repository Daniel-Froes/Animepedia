import CardFavoritos from "../card/cardFavoritos";

import Footer from "../footer/footer";
import HeaderLogado from "../header/headerLogado";

function PageFavoritos() {
    return (
        <>
            <HeaderLogado />
            <main>
                <h2 className="mt-5 mb-5">Meus Favoritos</h2>
                <CardFavoritos />
            </main>
        </>
    )
}

export default PageFavoritos;