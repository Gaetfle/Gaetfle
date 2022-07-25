import React from "react";
import { ListGroupItem } from "reactstrap";
import {AiFillDelete} from "react-icons/ai";
import {MdAdd} from "react-icons/md";
import {GrFormSubtract} from "react-icons/gr";
import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice, category } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item" style={{
      borderRadius: "20px",
      marginBottom: "15px"
    }}>
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h5 className="cart__product-title">{title}</h5>
            <h5>{category}</h5>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              <span>{price.toLocaleString("en-US")} VNĐ</span> 
              <div className=" d-flex align-items-center justify-content-between increase__decrease-btn" style={{width: "70px", marginLeft: "-15px", marginRight: "-15px"}}>
                <span className="decrease__btn" onClick={decreaseItem}>
                  <GrFormSubtract/>
                </span>
                <span className="quantity">{quantity}</span>
                <span className="increase__btn" onClick={incrementItem}>
                <MdAdd/>
                </span>
              </div> 
            <span>{totalPrice.toLocaleString("en-US")} VNĐ</span>
            </p>
            
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <AiFillDelete/>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
