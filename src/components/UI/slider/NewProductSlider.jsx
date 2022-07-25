import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import ProductCard from '../product-card/ProductCard';
import products from "../../../assets/fake-data/products";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/product__slider.css";


function SamplePrevArrow(props){
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#CCA085", borderRadius: "70%"}}
        onClick={onClick}
      />
    );
}

function SampleNextArrow (props){
    const { className, style, onClick } = props;
    return (
    <div
      className={className}
      style={{ ...style, background: "#CCA085", borderRadius: "70%"}}
      onClick={onClick}
    />
  );
}
const NewProductSlider = () => {
    const s_settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const [newProduct, setNewProduct] = useState([]);
    useEffect(() => {
        const filteredNew = products.filter((item) => item.type === "new");
        setNewProduct(filteredNew);
      }, []);

    return (
        <Slider {...s_settings}>
            {newProduct.map((item) => (
             <div key={item.id} className="slider__wrap mt-5 mb-4">
                <div className="slider__product d-flex align-items-center">
                    <ProductCard item = {item} />
                </div>
             </div>
        ))}
        </Slider>
    );
}

export default NewProductSlider;