import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import Rating from '@mui/material/Rating';
import { GrCart } from "react-icons/gr";
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

      <div>
        <Link to={`/products/${id}`}>
          <div className="product__img">
            <img src={image01} alt="product-img" className="w-100" />
          </div>
        </Link>
      </div>

      <div className="product__content">
        <div className="d-flex justify-content-between">
          <Link to={`/products/${id}`}>{title}</Link>
          <Rating name="half-rating-read" defaultValue={rating} style={{color: "#fdff30"}} precision={0.5} size = "small" />
        </div>

        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">{price.toLocaleString("en-US")} VNĐ</span>
          <div className="cart_button" onClick={addToCart}>
            <GrCart />
          </div>
          <IconButton  aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
