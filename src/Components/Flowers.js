import { Row, Col, Container, Button, Carousel } from "react-bootstrap";
import BestSellerCards from "./BestSellerCards";
import HeaderNav from "./HeaderNav";
import "./AboutUsBackground.css";
import Footer from "./Footer";
import item1 from "../Pictures/pic1.jpg";
import item2 from "../Pictures/pic2.jpg";
import item3 from "../Pictures/pic3.jpg";
import { GiSpotedFlower } from "react-icons/gi";
import PaginationNumber from "./Pagination";

function Flowers() {
  return (
    <>
      <HeaderNav></HeaderNav>

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
      <Container>
        <br />

        <Row className="mt-5">
          <Col />
          <Col>
            <Button variant="danger" className="me-1 w-25" style={{ marginLeft: "5px" }}>
              Rose
            </Button>
            <Button variant="danger" className="me-1 w-25" style={{ marginLeft: "5px" }}>
              Peony
            </Button>{" "}
            <Button variant="danger" className="me-1 w-25" style={{ marginLeft: "5px" }}>
              Iris
            </Button>
          </Col>
          <Col />
        </Row>
      </Container>

      <Container>
        <Row></Row>

        <Row>
          <Col>
            <BestSellerCards image={item1} title="Mini Charlene" />
          </Col>
          <Col>
            <BestSellerCards image={item2} title="Blush" />
          </Col>
          <Col>
            <BestSellerCards image={item3} title="Charlotte" />
          </Col>
        </Row>
        <Row>
          <Col>
            <BestSellerCards image={item1} title="Mini Charlene" />
          </Col>
          <Col>
            <BestSellerCards image={item2} title="Blush" />
          </Col>
          <Col>
            <BestSellerCards image={item3} title="Charlotte" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Row>
        <Col />
        <Col>
          <PaginationNumber />
        </Col>
        <Col />
      </Row>
      <br />
      <br />
      <Footer></Footer>
    </>
  );
}

export default Flowers;
