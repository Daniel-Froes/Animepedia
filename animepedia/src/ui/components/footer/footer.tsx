import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      <Nav className="justify-content-center py-4" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Início</Nav.Link>
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
      <p className="text-center paragrafo-copy py-4 my-4">© 2022 Animepedia Inc</p>
    </>
  );
};

export default Footer;
