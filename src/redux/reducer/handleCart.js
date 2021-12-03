const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //Check if product exist
      const exist = state.find((c) => c.id === product.id);
      if (exist) {
        //Increase prouct quantity already in cart
        return state.map((c) =>
          c.id === product.id ? { ...c, qty: c.qty + 1 } : c
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
      //eslint-disable-next-line
      break;

    case "DELITEM":
      const exist1 = state.find((c) => c.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((c) => c.id !== exist1.id);
      } else {
        return state.map((c) =>
          c.id === product.id ? { ...c, qty: c.qty - 1 } : c
        );
      }
      //eslint-disable-next-line
      break;

    case "REMOVEITEM":
      const exist2 = state.find((c) => c.id === product.id);
      if (exist2.qty !== 0) {
        return state.filter((c) => c.id !== exist2.id);
      }
      //eslint-disable-next-line
      break;
    default:
      return state;
      //eslint-disable-next-line
      break;
  }
};

export default handleCart;
