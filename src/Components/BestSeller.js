import { Image, Container, Col, Row } from "react-bootstrap";

function BestSeller() {
  return (
    <Container fluid="md">
      <Row>
        <Col></Col>

        <Col>
          <Image src="https://gifdb.com/images/high/best-seller-blinking-yellow-text-animation-7g4dx893oq5yec2r.gif" fluid />
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
}

export default BestSeller;
