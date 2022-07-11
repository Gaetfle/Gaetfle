import React from "react";
import Slider from "react-slick";
import homeBanner from "../../../assets/images/bannerHome.jpg";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import "../../../styles/hero-section.css";
import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className=" slider__content d-flex align-items-center gap-3 ">
        <img src={homeBanner} alt="bannerHome-img"/>
      </div>

      <div className=" slider__content d-flex align-items-center gap-3 ">
        <img src={banner1} alt="bannerHome-img2"/>
      </div>

      <div className=" slider__content d-flex align-items-center gap-3 ">
        <img src={banner2} alt="bannerHome-img3"/>
      </div>

      {/* <div>
        <img src={homeBanner} alt="bannerHome-img"/>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div> 
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
      */}
    </Slider>
  );
};

export default TestimonialSlider;
