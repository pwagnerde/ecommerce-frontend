import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LayoutSeven from "../layouts/LayoutSeven";
import Breadcrumb from "../layouts/wrappers/Breadcrumb";

const NotFound = () => {

  return (
    <Fragment>
      <LayoutSeven>
        <Breadcrumb />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>OPPS! PAGE NOT FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarity unavailable.
                  </p>
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    Back to home page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutSeven>
    </Fragment>
  );
};

export default NotFound;
