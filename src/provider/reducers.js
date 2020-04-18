export default (state, action) => {
  return {
    products: productsReducer(state.products, action)
  };
};

const productsReducer = (state, { payload }) =>
  payload.products.sort((a, b) => b.votes - a.votes);


