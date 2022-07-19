import React from "react";
import Slider from "react-slick";
import homeBanner from "../../../assets/images/bannerHome.jpg";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import "../../../styles/hero-section.css";
import "../../../styles/slider.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className=" slider__content d-flex align-items-center gap-3 ">
        <img src={homeBanner} alt="bannerHome-img" />
      </div>

      <div className=" slider__content d-flex align-items-center gap-3 ">
        <img src={banner1} alt="bannerHome-img2" />
      </div>

      <div className=" slider__content d-flex align-items-center gap-3 ">
        <img src={banner2} alt="bannerHome-img3" />
      </div>
    </Slider>
  );
};

export default BannerSlider;
