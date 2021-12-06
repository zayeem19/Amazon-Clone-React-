import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto align-items-center justify-content-between text-center">
          <li className="nav-item col-md-2">
            <NavLink exact="true" to="/" className="navbar-brand">
              Amazon
            </NavLink>
          </li>

          <li className="nav-item col-md-2">
            <NavLink to="/" className="nav-link">
              Deliver to
              <br />
              India
            </NavLink>
          </li>

          {/* Search Bar */}
          <li className="nav-item col-md-8">
            <form className="input-group">
              <NavLink
                to="/products"
                className="input-group-text text-decoration-none"
              >
                All
              </NavLink>
              <input className="form-control" type="text" name="text"></input>
              <button className="input-group-text btn-warning">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </li>

          <li className="nav-item col-md-2">
            <NavLink exact="true" to="/" className="nav-link">
              EN
            </NavLink>
          </li>

          <li className="nav-item col-md-2">
            <NavLink to="/register" className="nav-link">
              Hello, Sign in
              <br />
              Account & Lists
            </NavLink>
          </li>

          <li className="nav-item col-md-2">
            <NavLink to="/" className="nav-link">
              Returns <br /> & Orders
            </NavLink>
          </li>

          {/* Cart Icon With Total */}
          <li className="nav-item col-md-2">
            <NavLink className="nav-link" to="/cart">
              <i className="fas fa-shopping-cart fw-bold fa-2x"></i>
              Cart(<span className="text-danger fw-bold">{state.length}</span>)
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
