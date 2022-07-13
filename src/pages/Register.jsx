import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SignupImg from "../assets/images/signin.png";
import "../styles/login.css";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      {/* <CommonSection title="Signup" /> */}
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <img src={SignupImg} alt="login" style={{width: "500px", height: "500px", marginLeft: "90px", marginBottom: "20px"}}/>
            </Col>
            <Col lg="5" md="4" sm="6">
              <form className="form__register form mb-5" onSubmit={submitHandler}>
                <h2 className="login__text">Sign In</h2>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Sign Up
                </button>
              </form>
              <div className="login">
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
