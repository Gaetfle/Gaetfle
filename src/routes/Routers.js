import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Order from "../pages/Order";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Voucher from "../pages/Voucher";
import OrderDetails from "../pages/OrderDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/order" element={<Order />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/vouchers" element={<Voucher />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/orderdetail" element={<OrderDetails />} />
    </Routes>
  );
};

export default Routers;
