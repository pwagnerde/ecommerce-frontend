import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import customerReducer from "./customerSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    customer: customerReducer,
  },
});
