import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col lg="6" md="6"> </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="3" md="4" sm="6">
            <h5 className="contact__title">Working day</h5>
            <span className="contact-item">Monday - Sunday</span>
            <p className="contact-item">8.00 - 21.00</p>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="contact__title">Phone</h5>
            <span className="contact-item">+84 123 456 789</span>
          </Col>

          <Col lg="3" md="4" sm="6">
             <h5 className="contact__title">Address</h5>
             <span className="contact-item">227 Nguyen Van Cu, P4, Q5 </span>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="contact__title">Email</h5>
            <span className="contact-item">gaetfle@gmail.com</span>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6"> </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            </div>
          </Col>
        </Row>  
      </Container>
    </div>
  )
};

export default Contact;
