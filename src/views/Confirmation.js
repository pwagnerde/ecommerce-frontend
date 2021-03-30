import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LayoutSeven from "../layouts/LayoutSeven";
import Breadcrumb from "../layouts/wrappers/Breadcrumb";


const Confirmation = () => {


  return (
    <Fragment>
      <LayoutSeven>
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-rocket"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Many thanks for your oder! <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/"}>Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </LayoutSeven>
    </Fragment>
  );
};

export default Confirmation;
