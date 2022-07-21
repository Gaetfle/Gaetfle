import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import CheckoutCartItem from "../components/UI/checkout-card/CheckoutCartItem";
import ShippingInfo from "../components/UI/shipping-info/ShippingInfor";
import PaymentInfo from "../components/UI/payment-info/PaymentInfor";
import VoucherInfo from "../components/UI/voucher-info/VoucherInfor";
import { inforUiActions } from "../store/shipping-infor/inforUiSlice";
import { paymentUiActions } from "../store/payment/paymentUiSlice";
import { voucherUiActions } from "../store/voucher/voucherUiSlice";
import ChoosedVoucherCard from "../components/UI/voucher/ChoosedVoucher";
import OrderCard from "../components/UI/ordercard/OrderCard";

const Order = () => {
    const orderItems = useSelector((state) => state.orderlist.orderlistItems);

    return (
        <Helmet title="Cart">
            {console.log((state) => state.orderlist.orderlistItems)}
            <section>
                <Container>
                    <Row>
                        <div className="narrow__back d-flex">
                            <span>
                                <Link to="/cart">
                                    <MdArrowBack />
                                </Link>
                            </span>
                        </div>
                    </Row>
                    <Row>

                        <Col lg="12" md="6">
                            <div className="checkout__bill">
                                <div className="detail__infor">
                                    <p className="cart__product-price d-flex align-items-center gap-5" style={{ marginLeft: "10px", marginTop: "10px" }}>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "80px", marginRight: "10px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Order Id </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "20px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Order Date </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "20px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Payment </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "30px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Total </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "30px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Status </span>
                                        </div>
                                    </p>
                                    {orderItems.length === 0 ? (
                                        <h5 className="text-center mt-5">No item</h5>
                                    ) : (
                                        orderItems.map((item, index) => (
                                            <OrderCard item={item} key={index} />
                                        ))
                                    )
                                    }
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

export default Order;
