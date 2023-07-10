import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../Pictures/carousel1.jpg";
import carousel2 from "../Pictures/carousel2.jpg";
import carousel3 from "../Pictures/carousel3.jpg";
import carousel4 from "../Pictures/carousel4.jpg";

function CarouselPics() {
  return (
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={carousel2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={carousel3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={carousel4} alt="Fourth slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPics;
