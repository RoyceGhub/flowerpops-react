import { Container, Image, Row, Col } from "react-bootstrap";
import "./PaymentOption.css";

function PaymentOption() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col />
          <Col />
          <Col>
            <Image src="https://cdn-icons-png.flaticon.com/512/4567/4567667.png" style={{ height: "250px", width: "300px" }} fluid />
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>

      <Container>
        <Row>
          <Col />
          <Col>
            <h1>Payment Option</h1>
          </Col>
          <Col />
        </Row>
        <br />
        <p className="PaymentOptionPara">
          We accept payments through Paypal and IPay88 for Credit Cards Visa, Mastercard, JCB and Amex Other terms of Payments through Bank Deposit: BDO, BPI,
          Metrobank, UnionBank, MLhuillier, Palawan, Cebuana Lhuillier and Western Union We are not affiliated, associated, authorized, endorsed by, or in any
          way officially connected with other flower shop or online flower shop.
        </p>
      </Container>

      <Container fluid="md">
        <Row>
          <Image className="PaymentOptionPics" src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg" />
        </Row>
      </Container>
    </div>
  );
}

export default PaymentOption;
