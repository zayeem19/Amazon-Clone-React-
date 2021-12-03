//Add item to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//Increment || Decrements items in cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

//Remove items from cart
export const remCart = (product) => {
  return {
    type: "REMOVEITEM",
    payload: product,
  };
};
