import CardFavoritos from "../Card/cardFavoritos";

import Footer from "../Footer/footer";
import HeaderLogado from "../Header/headerLogado";

function PageFavoritos() {
    return (
        <>
            <HeaderLogado />
            <main>
                <h2 className="mt-5 mb-5">Meus Favoritos</h2>
                <CardFavoritos />
            </main>
            <Footer />
        </>
    )
}

export default PageFavoritos;