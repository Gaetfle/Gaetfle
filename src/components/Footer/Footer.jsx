import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import FooterImng from "../../assets/images/footer-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={FooterImng} alt="logo" />
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <h5 className="footer__title">Our Products</h5>
              <ListGroup>
                <ListGroupItem className=" support-item border-0 ps-0">
                  <p>Support</p>
                  <p>Guide</p>
                </ListGroupItem>
              </ListGroup>
          </Col>
            
          <Col lg="2" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup>
              <ListGroupItem className=" support-item border-0 ps-0">
                <p>+84 123 456 789</p>
                <p>gaetfle@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="2" md="4" sm="6">    
            <h5 className="footer__title">Company</h5>
              <ListGroup>
                <ListGroupItem className=" support-item border-0 ps-0">
                  <p>Home</p>
                  <p>About us</p>
                  <p>Contact us</p>
                </ListGroupItem>
              </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title"> Follow us</h5>
              <ListGroup>
                <div className="social__links d-flex align-items-center gap-3">
                  <span>
                    <i className="ri-facebook-line"></i>
                  </span>

                  <span>
                    <i className="ri-instagram-line"></i>
                  </span>
                </div>
              </ListGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Gaetfle Team. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
