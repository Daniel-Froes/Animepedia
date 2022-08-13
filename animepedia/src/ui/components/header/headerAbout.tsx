import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";


function HeaderAbout() {
  return (
    <>

      <header>
        <Navbar expand="lg" >
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
              <Nav
                className="me-auto px-5 my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#">Animpedia</Nav.Link>
                <Nav.Link href="#">Quem somos</Nav.Link>
                <Nav.Link href="#">Trabalhe Conosco</Nav.Link>
                <Nav.Link href="#">Contato</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default HeaderAbout;
