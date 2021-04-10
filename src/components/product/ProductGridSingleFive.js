import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getDiscountPrice } from "../../helpers/product";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrencySymbol,
  selectCurrencyRate,
} from "../../stores/productSlice";

const ProductGridSingleFive = ({
  product,
  addToCart,
  cartItem,
  sliderClassName,
  spaceBottomClass
}) => {
  const dispatch = useDispatch();
  const currencyRate = useSelector(selectCurrencyRate);
  const currencySymbol = useSelector(selectCurrencySymbol);

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap-3 scroll-zoom ${
            spaceBottomClass ? spaceBottomClass : ""
          }`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.product_id}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""
              />
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}

            <div className="product-content-3-wrap">
              <div className="product-content-3">
                <div className="product-title">
                  <h3>
                    <Link
                      to={process.env.PUBLIC_URL + "/product/" + product.product_id}
                    >
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <div className="price-3">
                  {discountedPrice !== null ? (
                    <Fragment>
                      <span>
                        {currencySymbol + finalDiscountedPrice}
                      </span>{" "}
                      <span className="old">
                        {currencySymbol + finalProductPrice}
                      </span>
                    </Fragment>
                  ) : (
                    <span>{currencySymbol + finalProductPrice} </span>
                  )}
                </div>
                <div className="product-action-3">
                  <div className="pro-same-action pro-cart">
                    {product.affiliateLink ? (
                      <a
                        href={product.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Buy now"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </a>
                    ) :  product.stock && product.stock > 0 ? (
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className={
                          cartItem !== undefined && cartItem.quantity > 0
                            ? "active"
                            : ""
                        }
                        disabled={
                          cartItem !== undefined && cartItem.quantity > 0
                        }
                        title={
                          cartItem !== undefined
                            ? "Added to cart"
                            : "Add to cart"
                        }
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    ) : (
                      <button disabled className="active" title="Out of stock">
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductGridSingleFive.propTypes = {
  addToCart: PropTypes.func,
  cartItem: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridSingleFive;
