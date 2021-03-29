import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
