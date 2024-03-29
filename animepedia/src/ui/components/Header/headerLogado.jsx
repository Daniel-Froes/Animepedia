import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";

function HeaderLogado() {
  return (
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
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto px-5 my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Anime"
                  menuVariant="dark"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Populares</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Lançamentos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Gêneros</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Ver tudo</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Mangá"
                  menuVariant="dark"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Populares</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Lançamentos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Gêneros</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Ver tudo</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contato</Nav.Link>
                <Nav.Link href="#">Comunidade</Nav.Link>
              </Nav>
              <Form className="d-flex me-auto p-5 ">
                <Form.Control
                  type="search"
                  placeholder="Ex: Shingeki no kyojin"
                  className="me-2 form-anime"
                  aria-label="Search"
                />
                <Button variant="outline-light">Procurar</Button>
              </Form>
              <Dropdown>
                <Dropdown.Toggle
                  className="mx-5 border-0"
                  variant="outline-info"
                  id="dropdown-basic"
                >
                  <Image
                    className="imagem-login"
                    src="/images/hinata.jpg"
                    width="70"
                    height="70"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Image
                    className="imagem-login"
                    src="/images/hinata.jpg"
                    width="70"
                    height="70"
                  />
                  <Container className="container-login">
                    <Link href={"/n/favoritos"}>
                      <p className="p-login">
                        <FaRegHeart /> Meus favoritos
                      </p>
                    </Link>
                  </Container>
                  <Container className="container-login">
                    <Link href={"/n/editar"}>
                      <p className="p-login">
                        <CgProfile /> Minha conta
                      </p>
                    </Link>
                  </Container>
                  <Container className="container-login">
                    <Link href={"/n/cadastro"}>
                      <p className="p-login">
                        <HiOutlineLogout /> Sair
                      </p>
                    </Link>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default HeaderLogado;
