import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import CheckoutCartItem from "../components/UI/checkout-card/CheckoutCartItem";
import ShippingInfo from "../components/UI/shipping-info/ShippingInfor";
import PaymentInfo from "../components/UI/payment-info/PaymentInfor";
import VoucherInfo from "../components/UI/voucher-info/VoucherInfor";
import { inforUiActions } from "../store/shipping-infor/inforUiSlice";
import { paymentUiActions } from "../store/payment/paymentUiSlice";
import { voucherUiActions } from "../store/voucher/voucherUiSlice";

const Checkout = () => {
  // const shippingInfo = [];
  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const cartProducts = useSelector((state) => state.cart.cartItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const dispatch = useDispatch();
  const totalPayment = cartTotalAmount + Number(shippingCost);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const showInfo = useSelector((state) => state.inforUi.inforIsVisible);
  const toggleInfor= () => {
    dispatch(inforUiActions.toggle());
  };

  const showPayment = useSelector((state) => state.paymentUi.paymentIsVisible);
  const togglePayment= () => {
    dispatch(paymentUiActions.toggle());
  };

  const showVoucher = useSelector((state) => state.voucherUi.voucherIsVisible);
  const toggleVoucher= () => {
    dispatch(voucherUiActions.toggle());
  };

  const name = useSelector((state) => state.order.name);
  const phone = useSelector((state) => state.order.phone);
  const address = useSelector((state) => state.order.address);
  const gmail = useSelector((state) => state.order.gmail);

  const method = useSelector((state) => state.payment.method);
  const cardNumber = useSelector((state) => state.payment.cardNumber);

  return (
    <Helmet title="Cart">
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
                <h5 className="mb-4">Order</h5>
                {cartItems.length === 0 ? (
                    <h5 className="text-center mt-5">No item</h5>
                  ) : (
                    cartItems.map((item, index) => (
                      <CheckoutCartItem item={item} key={index} />
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
                {name} <span>{phone}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  {address}
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  {gmail}
                </h6>

                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{color: "#999B84"}}>
                  Mặc định 
                  <span 
                    style={{color: "white", cursor: "pointer"}} 
                    onClick={toggleInfor}
                  >
                    Thay đổi
                  </span>
                  { showInfo && <ShippingInfo/>}
                </h6>

                <div className="detail__infor">
                  <span>
                    <MdPayment/>
                  </span>
                  <h4>Payment Method</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{paddingTop: "25px", borderTop: "1px solid #fff"}}>
                  {method} [{cardNumber}] 
                  <span
                    style={{color: "white", cursor: "pointer"}} 
                    onClick={togglePayment}
                  >
                    Thay đổi
                  </span>
                  { showPayment && <PaymentInfo/>}
                </h6>

                <div className="detail__infor">
                  <span>
                    <TbDiscount2/>
                  </span>
                  <h4 style={{marginBottom: "15px"}}>Applied Vouchers</h4>
                  <div className="voucher__area">
                      <span style={{marginLeft: "320px"}}><BsFillArrowRightCircleFill style={{marginTop: "-8px", cursor: "pointer"}} onClick={toggleVoucher}/></span>
                      { showVoucher && <VoucherInfo/>}
                  </div>
                  
                </div>

                <div className="detail__infor">
                  <span>
                    <AiOutlineDollar/>
                  </span>
                  <h4>Payment Details</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{paddingTop: "25px", borderTop: "1px solid #fff"}}>
                  Subtotal: <span>{cartTotalAmount} VND</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>{shippingCost} VND</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>{totalPayment} VND</span>
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
      <section>
      </section>
    </Helmet>
  );
};

export default Checkout;
