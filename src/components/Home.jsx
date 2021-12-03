import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import backgroundImgOne from "../images/background.jpg";
import backgroundImgTwo from "../images/background-2.jpg";
import basics from "../images/amazon-basics.jpg";
import electronics from "../images/electronics.jpg";
import computers from "../images/computers.jpg";
import shipping from "../images/shipping.jpg";

const Home = () => {
  return (
    <Fragment>
      {/* Bootstrap 5 Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={backgroundImgOne}
              className="d-block w-100"
              alt="backgroundOne"
            />
            <div className="carousel-caption d-none d-md-block bg-light text-dark">
              <p>
                You are on amazon.com. You can also shop on Amazon India for
                millions of products with fast local delivery.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={backgroundImgTwo}
              className="d-block w-100"
              alt="backgroundTwo"
            />
            <div className="carousel-caption d-none d-md-block bg-light text-dark ">
              <p>
                You are on amazon.com. You can also shop on Amazon India for
                millions of products with fast local delivery.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Product Container Starts */}
      <div className="row m-2">
        <article className="card col-sm m-2 ">
          <h4 className="card-title my-2">Amazon Basics</h4>
          <img src={basics} className="card-body" alt="" />
          <NavLink to="/products" className="text-success nav-link">
            See more
          </NavLink>
        </article>

        <article className="card col-sm  m-2">
          <h4 className="card-title my-2">Electronics</h4>
          <img src={electronics} className="card-body" alt="" />
          <NavLink to="/products" className="text-success nav-link">
            See more
          </NavLink>
        </article>

        <article className="card col-sm m-2">
          <h4 className="card-title my-2">Computers & Accessories</h4>
          <img src={computers} className="card-body" alt="" />
          <NavLink to="/products" className="text-success nav-link">
            Shop now
          </NavLink>
        </article>

        <article className="col-sm  m-2">
          <div className="my-2">
            <h4>
              Sign in for the best
              <br /> experience
            </h4>
            <NavLink to="/register" className="btn btn-warning w-100 my-2">
              Sign in securely
            </NavLink>
          </div>
          <img src={shipping} className="my-2" alt="" />
        </article>
      </div>
      {/* Product Container Ends */}
      <div className="container-fluid text-center my-4">
        <hr />
        <p>
          See personalized recommendations
          <br />
          <a href="/" className="btn btn-warning w-25 my-2">
            Sign in
          </a>
          <br />
          New customer?
          <NavLink to="/register" className="text-success text-decoration-none">
            Start here.
          </NavLink>
        </p>
        <hr />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
