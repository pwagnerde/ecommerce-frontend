import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const cartSlice = createSlice({
  name: "cart",
    initialState: {
      cartItems: []
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addToCart: (state, action) => {
      const product = action.payload;
      const cartItem = state.cartItems.findIndex((item) => item.product_id === product.product_id);
      if (cartItem === -1) {
        state.cartItems.push({
          ...product,
          quantity: 1,
          cartItemId: uuidv4(),
        });
      } else {
        const item = state.cartItems[cartItem];
        state.cartItems[cartItem] = {
          ...item,
          quantity: item.quantity + 1,
        };
      }
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      if (product.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.cartItemId !== product.cartItemId);
      } else {
        const cartItem = state.cartItems.findIndex((item) => item.product_id === product.product_id);
        const item = state.cartItems[cartItem];
        state.cartItems[cartItem] = {
          ...item,
          quantity: item.quantity - 1,
        };
      }
    },
    deleteFromCart: (state, action) => {
        const product = action.payload;
        state.cartItems = state.cartItems.filter(
          (item) => item.cartItemId !== product.cartItemId
        );
    },
    deleteAllFromCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const deletAllAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(deleteAllFromCart());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCarts = (state) => state.cart.cartItems;

export default cartSlice.reducer;
