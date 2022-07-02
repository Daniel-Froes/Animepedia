import Card from 'react-bootstrap/Card';

function CardNews() {
  return (
    <Card className="bg-dark text-white mt-5 my-5">
      <Card.Img src="/images/albedoOverlord.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardNews;