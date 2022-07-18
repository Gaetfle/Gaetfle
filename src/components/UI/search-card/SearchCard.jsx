import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/search-card.css";

const SearchCard = ({ item }) => {
  const { title, price, image01} = item;
  return (
    <ListGroupItem className="border-0 search_card__item" style={{
      borderRadius: "20px",
      marginBottom: "30px",
      marginLeft: "15px",
      height: "90px"
    }}>
      <div className="search_card__item-info d-flex gap-2">
        <img src={image01} 
             alt="product-img" 
             style={{
              height: "70px", 
              width: "70px",
              marginLeft: "10px"
             }}
        />

        <div className="search_card__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h5 className="search_card__product-title" style={{marginTop: "10px", marginLeft: "10px"}}>{title}</h5>
            <p className="search_card__product-price d-flex align-items-center gap-5" style={{marginLeft: "10px"}}>
              <span>{price.toLocaleString("en-US")} VNĐ</span> 
            </p>
            
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default SearchCard;
