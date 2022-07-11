import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { Link } from "react-router-dom";
import {MdArrowBack} from 'react-icons/md';
import {AiOutlineDollar} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';
import {MdPayment} from 'react-icons/md';
import {TbDiscount2} from 'react-icons/tb';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import CartItem from "../components/UI/cart/CartItem";

const Checkout = () => {
  // const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const userShippingAddress = {
  //     name: enterName,
  //     email: enterEmail,
  //     phone: enterNumber,
  //     country: enterCountry,
  //     city: enterCity,
  //     postalCode: postalCode,
  //   };

  //   shippingInfo.push(userShippingAddress);
  //   console.log(shippingInfo);
  // };

  return (
    <Helmet title="Checkout">
      <section>
        <Container>
          <Row>
            <div className="narrow__back d-flex">
              <span>
                <Link to="/products">
                  <MdArrowBack/>
                </Link>
              </span>
            </div>
          </Row>
          <Row>
            <Col lg="8" md="6">
              <div className="product__list">
                <h6 className="mb-4">Order</h6>
                {cartProducts.length === 0 ? (
                    <h6 className="text-center mt-5">No item</h6>
                  ) : (
                    cartProducts.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))
                  )
                }
                <div className="totalQuantity">Total Quantity: {totalQuantity}</div>
        </div>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <div className="detail__infor">
                  <span>
                    <HiLocationMarker/>
                  </span>
                  <h4>Delivery Address</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{paddingTop: "25px", borderTop: "1px solid #fff"}}>
                  Nguyễn Sơn <span>+84 0335 460 332</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  17 Trường Sa, P4, Q.Tân Bình, Hồ Chí Minh
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  nson19@gmail.com
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{color: "#999B84"}}>
                  Mặc định <span style={{color: "white"}}>Thay đổi</span>
                </h6>

                <div className="detail__infor">
                  <span>
                    <MdPayment/>
                  </span>
                  <h4>Payment Method</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{paddingTop: "25px", borderTop: "1px solid #fff"}}>
                  BIDV [128018391****] <span>Thay đổi</span>
                </h6>

                <div className="detail__infor">
                  <span>
                    <TbDiscount2/>
                  </span>
                  <h4 style={{marginBottom: "15px"}}>Applied Vouchers</h4>
                  <div className="voucher__area">
                      <span style={{marginLeft: "320px"}}><BsFillArrowRightCircleFill style={{marginTop: "-8px"}}/></span>
                  </div>
                  
                </div>

                <div className="detail__infor">
                  <span>
                    <AiOutlineDollar/>
                  </span>
                  <h4>Payment Details</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{paddingTop: "25px", borderTop: "1px solid #fff"}}>
                  Subtotal: <span>{cartTotalAmount}VND</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>{shippingCost}VND</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>{totalAmount}VND</span>
                  </h5>
                </div>
                <div className="order__button">
                  <button>
                    Order
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
