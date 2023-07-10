import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutUsBackground.css";

function AboutUs() {
  return (
    <div className="aboutUsBackground">
      <Container>
        <Row>
          <Col className="mt-5">
            <br />
            <br />
            <Image
              src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t39.30808-6/327430029_1557652311314767_7010136845373753046_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSdfbhYgCmOha5TlB9nkHxi383ivAM7jyLfzeK8AzuPNDuxXhetyudv2X-ucjqhCldyXlELNXcruIRmsXXa9v3&_nc_ohc=qw-WpjC9GKwAX-F3Iqm&_nc_ht=scontent.fmnl5-2.fna&oh=00_AfB4BMBDlIVn_wh3RT4tjraKb0Z4MqzQw6Ekcz_4DgXTUA&oe=648F2CFD"
              className="w-50 imageWidth"
              roundedCircle
            ></Image>
          </Col>

          <Col className="mt-5">
            <br></br>
            <br></br>

            <p className="aboutUsContext" style={{ fontSize: "22px" }}>
              <h1>About Us</h1>
              <br />
              Flowerpops is a flower shop in the Philippines that delivers fresh and well arranged flowers for all occasions. With years of experience,
              Flowerpops Shop is one of the industry’s pioneers here in the Philippines. We have a wide selection of flowers and arrangements for you to choose
              from.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
