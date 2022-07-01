import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";
import { DropdownButton } from "react-bootstrap";

function Header() {
  return (
    <>

      <header>
        <Navbar className="header " expand="lg">
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
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Anime" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Populares</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Lançamentos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Gêneros</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Ver tudo</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Mangá" id="navbarScrollingDropdown">
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
              <Form className="d-flex me-auto ">
                <Form.Control
                  type="search"
                  placeholder="Ex: Shingeki no kyojin"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Procurar</Button>
              </Form>
              <Dropdown>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  Entrar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Seu email" />
                      <Form.Text className="text-muted">
                        Nós nunca iremos compartilhar seu email com ninguém.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Lembrar de mim" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Entrar
                    </Button>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Novo aqui? Cadastre-se</Dropdown.Item>
                    <Dropdown.Item href="#">Esqueci minha senha</Dropdown.Item>
                  </Form>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
