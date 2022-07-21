import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';
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
                                <Link to="/home">
                                    <MdArrowBack /> <span style={{marginLeft: "20px", fontSize: "20px", fontWeight: 600}}>BACK TO HOMEPAGE</span>
                                </Link>
                            </span>
                        </div>
                    </Row>
                    <Row>
                        <h5 
                            style={{
                                marginTop: "-50px", 
                                marginBottom: "50px", 
                                fontSize: "40px", 
                                fontWeight: 600,
                                color: "#626546",
                                textAlign: "center"
                            }}
                            >
                                List Of Orders
                            </h5>
                    </Row>
                    <Row>

                        <Col lg="12" md="6">
                            <div className="checkout__bill">
                                <div className="detail__infor">
                                    <p className="cart__product-price d-flex align-items-center gap-5" style={{ marginLeft: "10px", marginTop: "10px" }}>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "50px", marginRight: "10px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Order Id </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "20px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Order Date </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "15px", marginRight: "35px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Payment </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "85px", marginRight: "30px" }}>
                                            <span style={{ color: "#FFFFFF" }} className="w-20">Total </span>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "120px", marginRight: "30px" }}>
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
