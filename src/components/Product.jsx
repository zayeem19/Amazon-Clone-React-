import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  //Fetching data with id from api and storing in product
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
    //eslint-disable-next-line
  }, []);

  //Loading skeleton
  const Loading = () => {
    return (
      <Fragment>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} />
        </div>
      </Fragment>
    );
  };

  //Display selected product
  const ShowProduct = () => {
    return (
      <Fragment>
        <div className="col-md-6">
          <img
            src={product.image}
            alt="productImage"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase">{product.category}</h4>
          <h1 className="display-6">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fas fa-star text-warning"></i>
          </p>
          <h4 className="display-6 fw-bold my-4">${product.price}</h4>
          <p className="lead">{product.description}</p>
          <button
            onClick={() => addProduct(product)}
            className="btn btn-warning"
          >
            Add to Cart
          </button>
        </div>
      </Fragment>
    );
  };

  //Returns loading skeleton || display product based on condition
  return (
    <div className="container py-5">
      <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
