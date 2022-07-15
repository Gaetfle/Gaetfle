import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSectionVoucher";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import coupon from "../assets/fake-data/coupon";
import freeship from "../assets/fake-data/freeship";
import VoucherCard from "../components/UI/voucher/VoucherCard";
import FreeshipCard from "../components/UI/voucher/FreeshipCard";
// import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const Voucher = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const [pageNumber, setPageNumber] = useState(0);

  // const searchedProduct = products.filter((item) => {
  //   if (searchTerm.value === "") {
  //     return item;
  //   }
  //   if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   } else {
  //     return console.log("not found");
  //   }
  // });

  // const productPerPage = 8;

  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = searchedProduct.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );

  // const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <Helmet title="Vouchers">
      <CommonSection title="Vouchers" />

      <section>
        <Container>
          <Row>
            {/* <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div> 
            </Col> */}
            {/* <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col> */}
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
            <div style={{marginTop: "60px", marginBottom: "40px"}}><h2>Freeship</h2></div>
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
