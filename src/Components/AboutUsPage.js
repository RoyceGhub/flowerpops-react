import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Footer from "./Footer";
import { GiSpotedFlower } from "react-icons/gi";

function AboutUsPage() {
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
      <br />

      <Container>
        <div style={{ height: "500px" }}>
          <Image src="https://www.larosaflowershop.com/image/catalog/information/about-us.jpg" style={{ height: "100%" }} />
        </div>

        <Row>
          <Col className="mb-5 mt-5">
            <h2>About Us!</h2>
            <h3>
              Welcome To <span>Flowerpops</span>
            </h3>

            <p>
              <span>Flowerpops is a Professional Flowers</span> Platform. Here we will provide you only interesting content, which you will like very much.
              We're dedicated to providing you the best of Flowers, with a focus on dependability and Ecommerce. We're working to turn our passion for Flowers
              into a booming online website. We hope you enjoy our Flowers as much as we enjoy offering them to you.
            </p>

            <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <Row>
          <Col>
            <h3>
              <span>Vision</span>
            </h3>
            <p>
              Be the prominent florist in Philippine industry with wide range of well-designed flower arrangement that guarantee customer’s expectation, bring
              smile on everyone’s face and make each occasion memorable.
            </p>

            <br />

            <h3>
              <span>Mission</span>
            </h3>
            <p>
              Our mission is about meeting customers need and to provide unique-personalized flower arrangements for any occasion that can help customers
              enhance relationships with the important people in their lives. And to offer quality floral products at affordable prices so our customers receive
              the best value for their money.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default AboutUsPage;
