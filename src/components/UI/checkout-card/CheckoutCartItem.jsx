import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/checkout-card.css";

const CheckoutCartItem = ({ item }) => {
  const { title, price, image01, quantity, totalPrice} = item;
  return (
    <ListGroupItem className="border-0 cart__item" style={{
      borderRadius: "20px",
      marginBottom: "30px",
      marginLeft: "30px",
      height: "90px"
    }}>
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} 
             alt="product-img" 
             style={{
              height: "70px", 
              width: "70px",
              marginLeft: "10px"
             }}
        />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h5 className="cart__product-title" style={{marginTop: "10px", marginLeft: "10px"}}>{title}</h5>
            <p className="cart__product-price d-flex align-items-center gap-5" style={{marginLeft: "10px"}}>
              <span>{price.toLocaleString("en-US")} VNĐ</span> 
              <div className=" d-flex align-items-center justify-content-between" style={{marginLeft: "120px", marginRight: "160px"}}>
                <span className="quantity">{quantity}</span>
              </div> 
            <span style={{color: "rgb(174 130 103)"}}>{totalPrice.toLocaleString("en-US")} VNĐ</span>
            </p>
            
          </div>
        </div>
      </div>

      {/* <div className=" d-flex align-items-center gap-5 cart__product-price">
        <h5 className="cart__product-title" style={{marginTop: "15px", marginLeft: "10px"}}>{title}</h5>
        <div>{price} VNĐ</div> 
        <div className=" d-flex align-items-center justify-content-between" style={{ marginLeft: "35px", marginRight: "65px"}}>
          <span className="quantity">{quantity}</span>
        </div> 
        <span>{totalPrice} VNĐ</span> 
        </div>
      </div> */}
    </ListGroupItem>
  );
};

export default CheckoutCartItem;
