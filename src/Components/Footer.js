import "./FooterBackground.css";
import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

function Footer() {
  return (
    <div>
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted FooterBackground">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block" style={{ color: "white" }}>
            <span>Get connected with us on social networks:</span>

            <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon className="FooterBackground" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset ">
              <MDBIcon fab icon="twitter" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "white" }}>
                  <MDBIcon icon="gem" className="me-3" />
                  Flowerpops
                </h6>
                <p style={{ color: "white" }}>
                  Flowerpops is a flower shop in the Philippines that delivers fresh and well arranged flowers for all occasions.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "white" }}>
                  Products
                </h6>
                <p className="p">Rose</p>
                <p className="p">Peony</p>
                <p className="p">Iris</p>
                <p className="p">Orchid</p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "white" }}>
                  Useful links
                </h6>
                <p className="p">Pricing</p>
                <p className="p">Settings</p>
                <p className="p">Orders</p>
                <p className="p">Help</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "white" }}>
                  Contact
                </h6>
                <p className="p">
                  <MDBIcon icon="home" className="me-2" />
                  Malabon, Philippines Address
                </p>
                <p className="p">
                  <MDBIcon icon="envelope" className="me-3" />
                  flowerpops1014@gmail.com
                </p>
                <p className="p">
                  <MDBIcon icon="phone" className="me-3" /> +63 995 830 6961
                </p>
                <p className="p">
                  <MDBIcon icon="print" className="me-3" style={{ color: "white" }} />
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="text-center p-4 " style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Flowerpops
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
