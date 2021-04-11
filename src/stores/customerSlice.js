import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get Axios base URL from environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// The function below is called a thunk and allows us to perform async logic.

export const register = createAsyncThunk(
  "customer/register",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", arg);
      console.log("Response:" + response);
      return response.data;
    } catch (err) {
      console.log("Error:" + err);
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "customer/login",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", arg);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "customer/logout",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/auth/logout");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// A function that accepts an initial state, an object full of reducer functions,
// and a "slice name", and automatically generates action creators and action
// types that correspond to the reducers and state.
export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    id: "",
    data: {},
    isLoggedIn: false,
    status: "idle",
    message: null,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: (state, action) => {
      state.status = "loading";
    },
    [register.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.id = action.payload.customer_id;
      state.isLoggedIn = false;
      state.message = "User account created. Please login.";
      state.data = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.status = "failed";
      state.message = action.payload;
    },
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.id = action.payload.customer_id;
      state.isLoggedIn = true;
      state.message = null;
      state.data = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.message = action.payload;
    },
    [logout.pending]: (state, action) => {
      state.status = "loading";
    },
    [logout.fulfilled]: (state, action) => {
      state.status = "idle";
      state.id = "";
      state.isLoggedIn = false;
      state.data = {};
      state.message = null;
    },
    [logout.rejected]: (state, action) => {
      state.status = "failed";
      state.message = action.payload;
    },
  },
});

//export const { fetchProducts } = customerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectCustomer = (state) => state.customer;

export default customerSlice.reducer;
