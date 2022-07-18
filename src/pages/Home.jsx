import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import "../styles/home.css";
import featureImg01 from "../assets/images/Delivery.png";
import featureImg02 from "../assets/images/Order.png";
import featureImg03 from "../assets/images/Deliveryfaster.png";
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import donutImg from "../assets/images/donut.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import Cookies from 'js-cookie';

const featureData = [
  {
    title: "Delivery Food",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Easy To Order",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Fastest Delivery",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState(products);
  // const [hotPizza, setHotPizza] = useState([]);
  const [email, setEmail] = useState("")
  useEffect(() => {
    const email = Cookies.get("user")
    if (email) {
      setEmail(email)
    }
  }, [])

  const [gift83, setGift83] = useState([]);
  const [bestseller, setBestseller] = useState([]);
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    const filteredGift83 = products.filter((item) => item.type === "gift for 83");
    const filteredBestseller = products.filter((item) => item.type === "best seller");
    const filteredNew = products.filter((item) => item.type === "new");
    setGift83(filteredGift83);
    setBestseller(filteredBestseller);
    setNewProduct(filteredNew);
    // const slicePizza = filteredPizza.slice(0, 4);
    // setHotPizza(slicePizza);
  }, []);

  let messagebtn = "Login";
  if (email) messagebtn = "Logout"
  //<button> messagebtn </button>
  // Cookies.remove("user")

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <div className="hero__content  ">
                {/* <h5 className="mb-3">Easy way to make an order</h5> */}
                <h1 className="mb-3 hero__title">
                  <span>CHERISH</span><br />sweet momments
                </h1>

                <p>
                  A website that sells cakes and flowers<br />
                  and bring warmth and sweetness to everyone!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/products">Order now <i class="ri-arrow-right-s-line"></i></Link>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="#">How to order?</Link>
                  </button>
                </div>
              </div>
            </Col>

            <Col lg="8" md="8">
              <TestimonialSlider />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container style={{ marginBottom: "160px" }}>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Best Seller Products</h2>
            </Col>
            {bestseller.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container style={{ marginBottom: "160px" }}>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Newest Products</h2>
            </Col>
            {newProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Gift For This 8/3</h2>
            </Col>

            {gift83.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="feature__title"><span>Our features</span></h2>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-50 h-150 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      <section>
        <div className="testimonial ">
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
