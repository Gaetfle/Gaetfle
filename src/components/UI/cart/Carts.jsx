import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart" style={{ borderRadius: "30px" }}>
        <div className="cart__close d-flex">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
          <span style={{ marginLeft: "-440px", color: "#626546" }}>
            <h5>Cart</h5>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>{totalAmount.toLocaleString("en-US")} VNĐ</span>
          </h6>
          {cartProducts.length === 0 ? (
            <button>
              <Link to="#" onClick={toggleCart}>
                Order
              </Link>
            </button>
          ) : (
            <button>
              <Link to="/cart" onClick={toggleCart}>
                Order
              </Link>
            </button>
          )}
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
