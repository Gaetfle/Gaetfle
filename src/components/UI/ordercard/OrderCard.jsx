import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/order-card.css";

const OrderCard = ({ item }) => {
    const { id, date, total, status, payment } = item;
    return (
        <ListGroupItem className="border-0 cart__item" style={{
            borderRadius: "20px",
            marginBottom: "30px",
            marginLeft: "30px",
            height: "90px",
        }}>
            <div className="cart__item-info d-flex " >
                <div className="w-100 d-flex align-items-center justify-content-between" >
                    <div>
                        <p className="cart__product-price d-flex align-items-center gap-5" style={{ marginLeft: "10px", marginTop: "10px" }}>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "60px", marginRight: "30px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{id} </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "30px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{date} </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "30px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{total} </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "30px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{payment} </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "10px", marginRight: "30px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{status} </span>
                            </div>
                        </p>
                    </div>
                </div>
            </div>

        </ListGroupItem>
    );
};

export default OrderCard;
