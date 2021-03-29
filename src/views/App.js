import React from "react";
import ScrollToTop from "../helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeFashionSix from "./home-page/HomeFashionSix";

const App = () => {

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={HomeFashionSix}
          />
          {/* Cart page */}
          <Route
            path={process.env.PUBLIC_URL + "/cart"}
            component={HomeFashionSix}
          />
          {/* Not found */}
          <Route exact component={HomeFashionSix} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
