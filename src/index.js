import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import store from "./stores/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./assets/scss/style.scss";
import { getProducts } from "./stores/productSlice";
//import { login } from "./stores/customerSlice";

/*const testUser = {
  first_name: "Philipp-Theodor",
  middle_name: "Josef",
  last_name: "Wagner",
  email_address: "testHALLO12@pnew.digital",
  username: "PNewDigital",
  password: "PNewDigital1980!",
  address_street_no: "3",
  address_street_name: "Hammanstrasse",
  address_city: "Frankfurt",
  address_state: "Hessen",
  address_postal_code: "60322",
  address_country_code: "DE",
};

store.dispatch(
  login(testUser)
);

/*store.dispatch(
  register(testUser)
);*/

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
