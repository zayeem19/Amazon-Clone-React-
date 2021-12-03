import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
//Importing Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Register from "./components/Register";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default App;
