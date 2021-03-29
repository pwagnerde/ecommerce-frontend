import { createSlice } from "@reduxjs/toolkit";
//import productData from "../models/products.json";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    currencySymbol: "€",
    currencyName: "EUR",
    currencyRate: 1,
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getProducts = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:3080/products`);
    const payload = await response.json();
    dispatch({ type: "product/fetchProducts", payload: payload });
  };
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCurrencySymbol = (state) => state.product.currencySymbol;
export const selectCurrencyName = (state) => state.product.currencyName;
export const selectCurrencyRate = (state) => state.product.currencyRate;
export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;
