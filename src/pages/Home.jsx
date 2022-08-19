import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import "../styles/home.css";
import donutImg from "../assets/images/donut.png";
import BannerSlider from "../components/UI/slider/BannerSlider.jsx";
import Cookies from 'js-cookie';
import BestProductSlider from "../components/UI/slider/BestProductSlider.jsx";
import NewProductSlider from "../components/UI/slider/NewProductSlider.jsx";
import RecommendProductSlider from "../components/UI/slider/RecommendProductSlider.jsx";

const Home = () => {
  
  const [email, setEmail] = useState("")
  useEffect(() => {
    const email = Cookies.get("user")
    if (email) {
      setEmail(email)
    }
  }, [])

  //let messagebtn = "Login";
  //if (email) messagebtn = "Logout"
  //<button> messagebtn </button>
  // Cookies.remove("user")

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <div className="hero__content  ">
                <h1 className="mb-3 hero__title">
                  <span>CHERISH</span><br />sweet momments
                </h1>

                <p>
                  A website that sells cakes and flowers<br />
                  and bring warmth and sweetness to everyone!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/products">Order now <i className="ri-arrow-right-s-line"></i></Link>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="#">How to order?</Link>
                  </button>
                </div>
              </div>
            </Col>

            <Col lg="8" md="8">
              <BannerSlider />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div style={{ marginTop: "-50px", padding: "50px" }}>
          <div className="text-center">
              <h2>Best Seller Products</h2>
          </div>
            <BestProductSlider/>
        </div>

        <div style={{ padding: "50px" }}>
          <div className="text-center">
              <h2>Newest Products</h2>
          </div>
            <NewProductSlider/>
        </div>

        <div style={{ padding: "50px" }}>
          <div className="text-center">
              <h2>Gift for 8/3 - International Woman's Day</h2>
          </div>
            <RecommendProductSlider/>
        </div>
      </section>

      <section>
        <div className="testimonial">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <img src={donutImg} alt="testimonial-img" style={{ height: "400px", width: "400px" }} />
              </Col>
              <Col lg="6" md="6" className="text-center">

                <h2 className="testimonial__title mb-4">
                  Do you have problems or suggestions for website?
                </h2>
                <p className="testimonial__desc">
                  We need your opinions to help us improve our website day by day.
                </p>
                <span className="input__contact">
                  <input type="text" placeholder="Your email" />
                  <div>
                    <input type="text" placeholder="Your opinions" />
                  </div>
                </span>
                <div className="button__contact">
                  <button>Get</button>
                </div>
              </Col>

            </Row>
          </Container>

        </div>
      </section>
    </Helmet>
  );
};

export default Home;
