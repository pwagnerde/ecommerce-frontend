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
export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer_id: "",
    username: "",
    email: "",
    user_type: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {},
});

export const { fetchProducts } = customerSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectCustomer = (state) => state.customer;

export default customerSlice.reducer;
