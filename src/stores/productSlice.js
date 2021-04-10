import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get Axios base URL from environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// The function below is called a thunk and allows us to perform async logic.
export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await axios.get("/products");
  return response.data;
});

// A function that accepts an initial state, an object full of reducer functions,
// and a "slice name", and automatically generates action creators and action
// types that correspond to the reducers and state.
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "idle",
    error: null,
    currencySymbol: "€",
    currencyName: "EUR",
    currencyRate: 1,
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { fetchProducts } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCurrencySymbol = (state) => state.product.currencySymbol;
export const selectCurrencyName = (state) => state.product.currencyName;
export const selectCurrencyRate = (state) => state.product.currencyRate;
export const selectProducts = (state) => state.product.products;
export const selectStatus = (state) => state.product.status;

export default productSlice.reducer;