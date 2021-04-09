import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = BASE_URL;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getProducts())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const productAPI = {
  getProducts: () => {
    return async (dispatch, getState) => {
      const response = await axios.get("/products");
      const payload = response.data;
      /* To be changed after component update */
      const transformedPayload = payload.map((product) => {
        return { ...product, id: product.product_id };
      });

      dispatch({ type: "product/fetchProducts", payload: transformedPayload });
    };
  },
};
