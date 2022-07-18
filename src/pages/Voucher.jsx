import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSectionVoucher";
import { Container, Row, Col } from "reactstrap";
import coupon from "../assets/fake-data/coupon";
import freeship from "../assets/fake-data/freeship";
import VoucherCard from "../components/UI/voucher/VoucherCard";
import FreeshipCard from "../components/UI/voucher/FreeshipCard";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const Voucher = () => {

  return (
    <Helmet title="Vouchers">
      <CommonSection title="Vouchers" />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <div style={{marginTop: "-20px", marginBottom: "40px"}}><h2>Discount Vouchers</h2></div>
            </Col>
            {coupon.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                {console.log(item)}
                <VoucherCard title={item.title} image={item.image} desc={item.desc} date={item.date} />
              </Col>
            ))}

            <Col lg="12" className="text-center">
            <div style={{marginTop: "10px", marginBottom: "40px"}}><h2>Freeship</h2></div>
            </Col>
            {freeship.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                {console.log(item)}
                <FreeshipCard title={item.title} image={item.image} desc={item.desc} date={item.date} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Voucher;
