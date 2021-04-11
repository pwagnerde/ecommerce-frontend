import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import store from "./stores/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./assets/scss/style.scss";
import { getProducts } from "./stores/productSlice";

store.dispatch(getProducts());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
