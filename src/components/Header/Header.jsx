import React, { useRef, useEffect } from "react";
import {FiSearch} from 'react-icons/fi';
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {GrCart} from "react-icons/gr";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";

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

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex justify-content-end">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>

          {/* ======= search ======= */}
          <div className="search-box">
            <input 
                  type="text" 
                  placeholder="Search"
                  style={{ 
                    height: "20px",
                    width: "320px",
                    borderRadius: "20px",
                    padding: "20px",
                    backgroundColor: "#FCF9F3"
                  }}
            />
            <div className="btn">
              <FiSearch/>
            </div>
          </div>

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
          <div className="nav__right d-flex align-items-center gap-5">
          
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="cart__icon" onClick={toggleCart}>
              <GrCart/>
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