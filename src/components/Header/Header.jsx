import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GrCart } from "react-icons/gr";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";
import Cookies from "js-cookie";
import { useState } from "react";
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import products from "../../assets/fake-data/products.js";
import Search from "../../components/UI/search/Search";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Products",
    path: "/products",
  },
  {
    display: "Vouchers",
    path: "/vouchers",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const [isLogin, setIsLogin] = useState(false);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    if (Cookies.get("user")) { setIsLogin(true) }
  })
  // useEffect(() => {


  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });

  //   return () => window.removeEventListener("scroll");
  // }, []);

  const loginHandler = () => {
    if (Cookies.get("user")) {
      Cookies.remove("user");
      setIsLogin(false)
      navigate("/");
    }
    else {
      navigate("/login");
    }
  }
  console.log(isLogin);
  return (
    <header className="header header__shrink" ref={headerRef}>
      <Container>
        <div className="nav__wrapper  d-flex justify-content-end">
          <Link to={`/home`}>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          {/* ======= search ======= */}
          <Search placeholder="Search" data ={products}/>
          
          {/* ======= menu ======= */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-start gap-5" style={{
            zIndex: '3',
            marginTop: '-3px'
          }}>

            <span className="user">
              <i className="ri-user-line" />
              <ul className="sub-login">
                <li><a href="/">Profile</a></li>
                <li onClick={loginHandler}>{isLogin && <div><FiLogOut /><span>Logout</span></div>}
                  {!isLogin && <div><FiLogIn /><span>Login</span></div>}
                </li>
              </ul>
            </span>
            <span className="cart__icon" onClick={toggleCart}>
              <GrCart />
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
