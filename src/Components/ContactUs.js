import "./AboutUsBackground.css";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import "./ContactUsBorder.css";
import Footer from "./Footer";
import { GiSpotedFlower } from "react-icons/gi";

function ContactUs() {
  return (
    <>
      <Carousel slick-disabled>
        <Carousel.Item>
          <div style={{ height: "350px" }}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/beautiful-fresh-roses-closeup-pastel-pink-background-natural-background_721474-18.jpg"
              style={{ width: "auto", height: "100%" }}
            />
          </div>
          <Carousel.Caption>
            <p>Flowerpops</p>
            <h3>
              <GiSpotedFlower />
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="fontStyle mt-5">
        <br />
        <h1>Contact Us</h1>
        <Row className="mt-5 ContactUsBorder1">
          <Col className="mt-3">
            <h1>Flowerpops</h1>
            <p>Malabon, Philippines Address</p>

            <h4>Mobile</h4>
            <p>0995 830 6961</p>

            <h4>Email</h4>
            <p>flowerpops1014@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <br />
      {/* Form */}
      <Container>
        <Row className="mt-5 ContactUsBorder1">
          <Col className="mt-5">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
              <Button className="mb-5" variant="success">
                Success
              </Button>{" "}
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Footer></Footer>
    </>
  );
}

export default ContactUs;
