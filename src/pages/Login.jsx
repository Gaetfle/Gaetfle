import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link,  useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import "../styles/login.css";
import Cookies from 'js-cookie';
import users from "../assets/fake-data/user";
const Login = () => {

  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    for(let i = 0; i < users.length; i++) {
      if(email === users[i].email && password === users[i].password) {
        Cookies.set('user', users[i].username);
        navigate("/home");
        break;
      }
    }
  }

  console.log(email, password);

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <img src={loginImg} alt="login" style={{width: "500px", height: "500px", marginLeft: "90px", marginBottom: "20px"}}/>
            </Col>
            <Col lg="5" md="4" sm="6">
              <form className="form__login form mb-5" onSubmit={submitHandler}>
                <h2 className="login__text">Login</h2>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}

                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Login
                </button>
              </form>
              <div className="register">
                <Link to="/register">
                  Don't have an account? Create an account
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;