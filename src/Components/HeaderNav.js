import "bootstrap/dist/css/bootstrap.min.css";
import "./Button.css";
import { Button, Navbar, Container, Form, Nav, Image, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState, React } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

function HeaderNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="bg-danger shadow-1-strong" expand="lg" style={{ height: "90px" }}>
      <Container fluid>
        <NavLink>
          <Image
            src="https://www.freeiconspng.com/thumbs/flowers-icon-png/free-flower-material-cherry--pictures-of-clipart-and-graphic-design--20.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
            roundedCircle
          />
        </NavLink>

        {/* NavBaH */}
        {/* Home */}
        <NavLink to={"/home"}>
          <Navbar.Brand style={{ fontFamily: "cursive", color: "white", fontSize: "40px" }}>Flowerpops</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-center flex-grow-1" style={{ maxHeight: "100px" }} navbarScroll>
            {/* AboutUs */}
            <NavLink to={"/AboutUsPage"}>
              <Button variant="secondary-outline-light" size="lg" className="buttonColorNav">
                About Us
              </Button>{" "}
            </NavLink>
            {/* Flowers */}
            <NavLink to={"/Flowers"}>
              <Button variant="secondary-outline-light" size="lg" className="buttonColorNav">
                Flowers
              </Button>{" "}
            </NavLink>
            {/* ContactUS */}
            <NavLink to={"/contactus"}>
              <Button variant="secondary-outline-light" size="lg" className="buttonColorNav">
                Contact Us
              </Button>{" "}
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            {/* SearchButton */}
            <Button className="searchButton" variant="secondary outline-light">
              <FaSearch />
            </Button>{" "}
          </Form>
          {/* CartButton */}
          <NavLink to={"/cart"}>
            <Button className="cartButton" variant="outline-light">
              <FaShoppingCart />
            </Button>{" "}
          </NavLink>
          {/* MenuButton */}
          <Button variant="outline-light" onClick={handleShow}>
            <MdMenu />
          </Button>
          {""}
          {/* OFFCANVAS */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Flowerpops Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ModalLogin />
              <br />
              <br />

              <ModalRegister />
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
