import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import Rating from '@mui/material/Rating';
import {GrCart} from "react-icons/gr";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


const ProductCard = (props) => {
  const { id, title, image01, price, rating } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        rating
      })
    );
  };

  return (
    
    <div className="product__item">

      <div className=""> 
        <div className="cart_button" onClick={addToCart}>
          <GrCart/>
        </div>

        <Link to={`/products/${id}`}>
          <div className="product__img">
            <img src={image01} alt="product-img" className="w-100" />
          </div>
        </Link>
      </div>
      
      <div className="product__content">
        <h5 className="d-flex justify-content-between">
          <Link to={`/products/${id}`}>{title}</Link>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </h5>
        
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">{price} VND</span>
    
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;