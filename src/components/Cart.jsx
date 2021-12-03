import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, remCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  //Function to add item to Cart and Increment
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  //Function to decrease quantity of item in cart
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  //Function to remove item from cart
  const handleRem = (item) => {
    dispatch(remCart(item));
  };

  //No items in Cart
  const emptyCart = () => {
    return (
      <div className="p-4 my-4">
        <div className="container py-4">
          <h2>Your Amazon Cart is empty</h2>
          <NavLink className="text-decoration-none text-success" to="/products">
            Shop today's deals
          </NavLink>
          <div className="my-4">
            <button className="btn btn-warning">Sign in to your account</button>
            <button className="btn btn-outline-light text-dark mx-2">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    );
  };

  //Display items in a cart
  const cartItems = (product) => {
    return (
      <Fragment>
        <div className="row py-4">
          <div className="col-md-8">
            <div className="container">
              <h2>Shopping Cart</h2>
              <p className="float-end">Price</p>
              <br />
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt="productImage"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>
                <div className="col-md-6">
                  <h4>{product.title}</h4>
                  <p>
                    {product.rating && product.rating.rate}{" "}
                    <i className="fas fa-star text-warning"></i>
                    <span className="text-success">
                      ({product.rating.count})
                    </span>
                  </p>
                  <button
                    onClick={() => handleAdd(product)}
                    className="btn btn-secondary"
                  >
                    +
                  </button>{" "}
                  {product.qty}
                  <button
                    onClick={() => handleDel(product)}
                    className="btn btn-secondary mx-2"
                  >
                    -
                  </button>{" "}
                  <span
                    className="text-success"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRem(product)}
                  >
                    Delete
                  </span>
                </div>
                <div className="col-md-2">
                  <h2>${product.price}</h2>
                </div>
              </div>
              <hr />
              <p className="lead fw-bold float-end">
                Subtotal ({product.qty} item) : $
                {(product.qty * product.price).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mx-4">
              <div className="card-body">
                <p className="lead ">
                  Subtotal ({product.qty} item) :{" "}
                  <span className="fw-bold">
                    ${(product.qty * product.price).toFixed(2)}
                  </span>
                </p>
                <input type="checkbox" />{" "}
                <label htmlFor="">This order contains a gift</label>
                <br />
                <NavLink to="/register" className="btn btn-warning my-2">
                  Proceed to checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  //Display empty cart || items in cart based on condition
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Cart;
