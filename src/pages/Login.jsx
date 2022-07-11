import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from '../store/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(
      {
        email: email,
        password: password,
        isAuthenticated: true,
      }
    ));
  };
  console.log(email, password);

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
