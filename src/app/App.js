import React from "react";
import ScrollToTop from "../helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Product from "../views/Product";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import NotFound from "../views/NotFound";
import Confirmation from "../views/Confirmation";
import LoginRegister from "../views/LoginRegister";
import Contact from "../views/Contact";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Product page */}
          <Route
            path="/product/:id" component={Product} />

          {/* Login page */}
          <Route path="/login" component={LoginRegister} />
          <Route path="/register" component={LoginRegister} />

          {/* Cart page */}
          <Route path="/cart" component={Cart} />

          {/* Checkout page */}
          <Route path="/checkout" component={Checkout} />

          {/* Confirmation page */}
          <Route path="/thank-you" component={Confirmation} />
          
          {/* Contact page */}
          <Route path="/contact" component={Contact} />

          {/* Not found */}
          <Route path="/not-found" component={NotFound} />

          <Route exact component={Home} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
