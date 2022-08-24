import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardFavoritos() {
  return (
    <>
    <div>
    <CardGroup className='gap-5 card-group'>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/thumb-haikyu.jpg" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card"></Card.Title>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/thumb-pnv.png" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card"></Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    <div>
    <CardGroup className='gap-5 card-group mt-5'>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/erased.jpg" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card"></Card.Title>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src="/images/death-parade.jpg" className="imagem-card-grid" />
        <Card.Body>
          <Card.Title className="text-center titulo-card"></Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  );
}

export default CardFavoritos;