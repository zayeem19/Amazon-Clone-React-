import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  //fetching from data from api and storing in filter
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        // eslint-disable-next-line
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  //loading Skeleton
  const Loading = () => {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4">
            <Skeleton height={350} />
          </div>
          <div className="col-md-8">
            <Skeleton height={350} />
          </div>
        </div>
      </Fragment>
    );
  };

  //Filtering items based on category
  const filterProduct = (cat) => {
    const updatedList = data.filter((c) => c.category === cat);
    setFilter(updatedList);
  };

  //Product display
  const ShowProducts = () => {
    return (
      <Fragment>
        <div className="row">
          {/* Filter products column */}
          <div className="col-md-3">
            <div className="container d-flex flex-column">
              <h4>By Categories</h4>
              <div
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => setFilter(data)}
              >
                All
              </div>
              <div
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </div>
              <div
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => filterProduct("women's clothing")}
              >
                Women's Clothing
              </div>
              <div
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => filterProduct("jewelery")}
              >
                Jewellery
              </div>
              <div
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </div>
            </div>
          </div>
          {/* Product display column */}
          <div className="col-md-8">
            {filter.map((product) => (
              <div className="container row " key={product.id}>
                <div className="card m-2 p-2">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={product.image}
                        style={{ width: "200px", height: "200px" }}
                        alt="productImage"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <h4 className="card-title">
                          {product.title.substring(0, 12)}
                        </h4>
                        <div className="card-text">
                          <span className="badge bg-warning">
                            {" "}
                            {product.rating.rate}{" "}
                          </span>
                          <span className="text-success">
                            {" "}
                            {product.rating.count}
                          </span>
                        </div>
                        <h2>${product.price}</h2>
                        <NavLink
                          to={`/products/${product.id}`}
                          className="text-decoration-none text-success"
                        >
                          view more
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="container my-2 py-2">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Featured Products</h1>
            <hr />
          </div>
        </div>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </Fragment>
  );
};

export default Products;
