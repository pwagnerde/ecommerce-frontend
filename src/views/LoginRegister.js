import React, { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutSeven from "../layouts/LayoutSeven";
import Breadcrumb from "../layouts/wrappers/Breadcrumb";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { login, register, logout,selectCustomer } from "../stores/customerSlice";

const LoginRegister = () => {
  const dispatch = useDispatch();
  const customerData = useSelector(selectCustomer);
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (
      !/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(
        values.username
      )
    ) {
      errors.username =
        "Name can only use letters,numbers, minimum length is 8 characters";
    }
    if (!values.first_name) {
      errors.first_name = "Required";
    } else if (values.first_name.length > 15) {
      errors.first_name = "Must be 15 characters or less";
    }
    if (values.middle_name.length > 15) {
      errors.middle_name = "Must be 15 characters or less";
    }
    if (!values.last_name) {
      errors.last_name = "Required";
    } else if (values.last_name.length > 20) {
      errors.last_name = "Must be 20 characters or less";
    }
    if (!values.email_address) {
      errors.email_address = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(values.email_address)
    ) {
      errors.email_address = "Invalid email address";
    }
    if (!values.address_postal_code) {
      errors.address_postal_code = "Required";
    } else if (
      !/^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/.test(
        values.address_postal_code
      )
    ) {
      errors.address_postal_code = "Invalid zip code";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase, one number and one special case character";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Required";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "Password doesn't match";
    }

    return errors;
  };

  const formikRegister = useFormik({
    initialValues: {
      username: "PNewDigital",
      first_name: "Philipp-Theodor",
      middle_name: "Josef",
      last_name: "Wagner",
      email_address: "testHALLO12@pnew.digital",
      address_street_no: "3",
      address_street_name: "Hammanstrasse",
      address_city: "Frankfurt",
      address_state: "Hessen",
      address_postal_code: "60322",
      address_country_code: "DE",
      password: "PNewDigital1980!",
      confirm_password: "PNewDigital1980!",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(register(values));
    },
  });
  const formikLogin = useFormik({
    initialValues: {
      username: "PNewDigital",
      password: "PNewDigital1980!",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(login(values));
    },
  });

  return (
    <Fragment>
      <LayoutSeven>
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            {!customerData.isLoggedIn ? (
                              <form onSubmit={formikLogin.handleSubmit}>
                                <label htmlFor="username">Username</label>
                                <input
                                  id="username"
                                  name="username"
                                  type="text"
                                  onChange={formikLogin.handleChange}
                                  value={formikLogin.values.username}
                                />
                                <label htmlFor="password">Password</label>
                                <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  onChange={formikLogin.handleChange}
                                  value={formikLogin.values.password}
                                />
                                <div className="button-box">
                                  <button type="submit">
                                    <span>Login</span>
                                  </button>
                                </div>
                              </form>
                            ) : (
                              <div class="logout">
                                <p>{`Hi ${customerData.data.first_name}, you are logged in.`}</p>
                                <div className="button-box">
                                  <button onClick={() => dispatch(logout())}>
                                    <span>Logout</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            {!customerData.isLoggedIn ? (
                              <form onSubmit={formikRegister.handleSubmit}>
                                <label htmlFor="username">Username</label>
                                {formikRegister.errors.username ? (
                                  <div>{formikRegister.errors.username}</div>
                                ) : null}
                                <input
                                  id="username"
                                  name="username"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.username}
                                />
                                <label htmlFor="first_name">First Name</label>
                                {formikRegister.errors.first_name ? (
                                  <div>{formikRegister.errors.first_name}</div>
                                ) : null}
                                <input
                                  id="first_name"
                                  name="first_name"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.first_name}
                                />
                                <label htmlFor="middle_name">Middle Name</label>
                                {formikRegister.errors.middle_name ? (
                                  <div>{formikRegister.errors.middle_name}</div>
                                ) : null}
                                <input
                                  id="middle_name"
                                  name="middle_name"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.middle_name}
                                />
                                <label htmlFor="last_name">Last Name</label>
                                {formikRegister.errors.last_name ? (
                                  <div>{formikRegister.errors.last_name}</div>
                                ) : null}
                                <input
                                  id="last_name"
                                  name="last_name"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.last_name}
                                />
                                <label htmlFor="email_address">
                                  Email Address
                                </label>
                                {formikRegister.errors.email_address ? (
                                  <div>
                                    {formikRegister.errors.email_address}
                                  </div>
                                ) : null}
                                <input
                                  id="email_address"
                                  name="email_address"
                                  type="email"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.email_address}
                                />
                                <label htmlFor="address_street_name">
                                  Street Name
                                </label>
                                <input
                                  id="address_street_name"
                                  name="address_street_name"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={
                                    formikRegister.values.address_street_name
                                  }
                                />
                                <label htmlFor="address_street_no">
                                  Street No
                                </label>
                                <input
                                  id="address_street_no"
                                  name="address_street_no"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={
                                    formikRegister.values.address_street_no
                                  }
                                />
                                <label htmlFor="address_postal_code">
                                  Zip Code
                                </label>
                                {formikRegister.errors.address_postal_code ? (
                                  <div>
                                    {formikRegister.errors.address_postal_code}
                                  </div>
                                ) : null}
                                <input
                                  id="address_postal_code"
                                  name="address_postal_code"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={
                                    formikRegister.values.address_postal_code
                                  }
                                />
                                <label htmlFor="address_city">City</label>
                                <input
                                  id="address_city"
                                  name="address_city"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.address_city}
                                />
                                <label htmlFor="address_state">State</label>
                                <input
                                  id="address_state"
                                  name="address_state"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.address_state}
                                />
                                <label htmlFor="address_country_code">
                                  Country
                                </label>
                                <input
                                  id="address_country_code"
                                  name="address_country_code"
                                  type="text"
                                  onChange={formikRegister.handleChange}
                                  value={
                                    formikRegister.values.address_country_code
                                  }
                                />
                                <label htmlFor="password">Password</label>
                                {formikRegister.errors.password ? (
                                  <div>{formikRegister.errors.password}</div>
                                ) : null}
                                <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.password}
                                />
                                <label htmlFor="confirm_password">
                                  Confirm Password
                                </label>
                                {formikRegister.errors.confirm_password ? (
                                  <div>
                                    {formikRegister.errors.confirm_password}
                                  </div>
                                ) : null}
                                <input
                                  id="confirm_password"
                                  name="confirm_password"
                                  type="password"
                                  onChange={formikRegister.handleChange}
                                  value={formikRegister.values.confirm_password}
                                />
                                <div className="button-box">
                                  <button type="submit">
                                    <span>Register</span>
                                  </button>
                                </div>
                                <div>{customerData.message}</div>
                              </form>
                            ) : (
                              <div class="logout">
                                <p>{`Hi ${customerData.data.first_name}, you are already logged in.`}</p>
                                <div className="button-box">
                                  <button onClick={() => dispatch(logout())}>
                                    <span>Logout</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutSeven>
    </Fragment>
  );
};

export default LoginRegister;
