import { Button, Card, Col, Row, Container, ListGroup } from "react-bootstrap";

function BestSellerCards(props) {
  return (
    <>
      <div flush>
        <br />
        <br />
        <Container>
          <Card className="h-50" border="light">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>₱2,750.00</ListGroup.Item>
              </ListGroup>
              <Button variant="warning">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default BestSellerCards;
