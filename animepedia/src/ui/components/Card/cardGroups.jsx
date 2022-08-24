import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CardGroups() {
  return (
    <Row xs={1} md={3} className="g-4 my-5">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col>
          <Card className='card-index'>
            <Card.Img className="imagem-card-grid " variant="top" src="/images/shikimori.jpg" />
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
  );
}

