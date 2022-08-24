import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

function HeaderLogin() {
    return(
        <>     
            <header>
                <Navbar expand="lg">
                    <Container fluid>
                        <Image
                            className="img-nav"
                            src="/images/img-nav.png"
                            alt="Logotipo Animepedia"
                            width="100"
                            height="100"
                        />
                        <Navbar.Brand className="img-nav" href="/">
                            Animepedia
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default HeaderLogin