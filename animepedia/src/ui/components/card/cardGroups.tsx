import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function CardGroups() {
  return (
    <>
    
      <Row xs={1} md={3} className="g-4 my-5">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="/images/kizumimonogatari.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={1} md={3} className="g-4 my-5">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="/images/kizumimonogatari.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={1} md={3} className="g-4 my-5">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="/images/kizumimonogatari.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
