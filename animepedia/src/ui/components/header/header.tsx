import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Header() {
  return (
    <>

        <header>
          <Navbar className="header mx-5 " expand="lg">
            <Container fluid>
              <Image
                className="img-nav"
                src="/images/img-nav.png"
                alt="Logotipo Animepedia"
                width="100"
                height="100"
              />
              <Navbar.Brand className="img-nav " href="/">
                Animepedia
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown title="Anime" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Populares
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Lançamentos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Gêneros</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Ver tudo
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Mangá" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Populares
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Lançamentos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Gêneros</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Ver tudo
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Contato</Nav.Link>
                  <Nav.Link href="#">Comunidade</Nav.Link>
                </Nav>
                <Form className="d-flex me-auto ">
                  <Form.Control
                    type="search"
                    placeholder="Ex: Shingeki no kyojin"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Procurar</Button>
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-4"
                    align="end"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    </>
  );
}

export default Header;
