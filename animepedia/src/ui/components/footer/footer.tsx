import "bootstrap/dist/css/bootstrap.css";

import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      <footer>
        <Nav  className="justify-content-center py-4">
          <Nav.Item>
            <Nav.Link href="/">Início</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Quem Somos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Lorem</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Lorem, ipsum</Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center paragrafo-copy py-4 ">
          © 2022 Animepedia Inc
        </p>
      </footer>
    </>
  );
};

export default Footer;
