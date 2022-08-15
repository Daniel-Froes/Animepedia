import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardAbout() {
  return (
    <>
    <div>
    <CardGroup className='gap-5 card-group'>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/officialtrailer.jpg" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card">ANIMES</Card.Title>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/mangas.jpg" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card">MANGAS</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    <div>
    <CardGroup className='gap-5 card-group'>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/comunidade.jpg" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card">COMUNIDADE</Card.Title>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/art.jpg" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card">DIVULGUE SUA ARTE</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  );
}

export default CardAbout;