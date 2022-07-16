import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSectionVoucher";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Helmet title="Vouchers">
      <CommonSection title="Vouchers" />
      <div className="contact">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 style={{ fontWeight: "bold" }} className="contact__title">Working day</h5>
              <span className="contact-item">Monday - Sunday</span>
              <p className="contact-item">8.00 - 21.00</p>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 style={{ fontWeight: "bold" }} className="contact__title">Phone</h5>
              <span className="contact-item">+84 123 456 789</span>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 style={{ fontWeight: "bold" }} className="contact__title">Address</h5>
              <span className="contact-item">227 Nguyen Van Cu, P4, Q5 </span>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 style={{ fontWeight: "bold" }} className="contact__title">Email</h5>
              <span className="contact-item">gaetfle@gmail.com</span>
            </Col>
          </Row>
        </Container>
      </div>
    </Helmet >
  )
};

export default Contact;
