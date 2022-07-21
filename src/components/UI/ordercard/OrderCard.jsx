import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/order-card.css";

const OrderCard = ({ item }) => {
    const { id, date, total, status, payment } = item;
    return (
        <ListGroupItem className="border-0 cart__item" style={{
            borderRadius: "20px",
            marginBottom: "30px",
            marginLeft: "0px",
            height: "90px",
            width: "100%",
        }}>
            <div className="cart__item-info d-flex " >
                <div className="w-100 d-flex align-items-center justify-content-between" >
                    <div>
                        <p className="cart__product-price d-flex align-items-center gap-5" style={{ marginLeft: "10px", marginTop: "10px", textAlign: "left" }}>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "35px", marginRight: "30px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{id} </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "30px", marginRight: "25px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{date} </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "25px", marginRight: "60px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{total.toLocaleString("en-US")} VNĐ </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "-8px", marginRight: "-24px" }}>
                                <span style={{ color: "#000000" }} className="w-20">{payment} </span>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "145px", marginRight: "30px", textAlign: "left" }}>
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
