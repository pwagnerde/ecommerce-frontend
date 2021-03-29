import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderSix from "./wrappers/HeaderSix";
import FooterTwo from "./wrappers/FooterTwo";

const LayoutSeven = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix layout="container-fluid" />
      {children}
      <FooterTwo
        backgroundColorClass="bg-black"
        footerTopBackgroundColorClass="bg-black"
        footerTopSpaceTopClass="pt-80"
        spaceBottomClass="pb-25"
        footerLogo="/assets/img/logo/logo-2.png"
      />
    </Fragment>
  );
};

export default LayoutSeven;

LayoutSeven.propTypes = {
  children: PropTypes.any,
};
