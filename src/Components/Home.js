import { Row, Col, Container } from "react-bootstrap";
import BestSeller from "./BestSeller";
import BestSellerCards from "./BestSellerCards";
import CarouselPics from "./Carousel";
import AboutUs from "./AboutUs";
import "./AboutUsBackground.css";
import PaymentOption from "./PaymentOption";
import item1 from "../Pictures/pic1.jpg";
import item2 from "../Pictures/pic2.jpg";
import item3 from "../Pictures/pic3.jpg";
import item4 from "../Pictures/pic4.jpg";
import item5 from "../Pictures/pic5.jpg";
import item6 from "../Pictures/pic6.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <CarouselPics></CarouselPics>
      <br />
      <br />
      <br />
      <br />
      <BestSeller></BestSeller>
      <br />
      <br />
      <Container>
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
            <BestSellerCards image={item4} title="Mini Charlene" />
          </Col>
          <Col>
            <BestSellerCards image={item5} title="Blush" />
          </Col>
          <Col>
            <BestSellerCards image={item6} title="Charlotte" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <AboutUs></AboutUs>
      <br />
      <br />
      <br />
      <PaymentOption></PaymentOption>
      <br />
      <br />
      <br />
      <Footer></Footer>
    </>
  );
}

export default Home;
