import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{"Home"}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/register"}>{"Register"}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/login"}>{"Login"}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/my-account"}>
              {"My Account"}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/cart"}>{"My cart"}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/checkout"}>{"Check out"}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>{"Contact us"}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
