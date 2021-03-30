import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { getProductCartQuantity } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import { useSelector, useDispatch } from "react-redux";
import { selectCarts, addToCart } from "../../stores/cartSlice";
import {
  selectCurrencySymbol
} from "../../stores/productSlice";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  finalDiscountedPrice,
  finalProductPrice,
}) => {
  const dispatch = useDispatch();
  const [productStock] = useState(product.stock);
  const cartItems = useSelector(selectCarts);
  const currencySymbol = useSelector(selectCurrencySymbol);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product
  );

  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>{currencySymbol + finalDiscountedPrice}</span>{" "}
            <span className="old">
              {currencySymbol + finalProductPrice}
            </span>
          </Fragment>
        ) : (
          <span>{currencySymbol + finalProductPrice} </span>
        )}
      </div>
      {product.rating && product.rating > 0 ? (
        <div className="pro-details-rating-wrap">
          <div className="pro-details-rating">
            <Rating ratingValue={product.rating} />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="pro-details-list">
        <p>{product.shortDescription}</p>
      </div>
      {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  dispatch(addToCart(
                    product
                  ))
                }
                disabled={productCartQty >= productStock}
              >
                Add To Cart
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div>
        </div>
      )}
      {product.category ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
            {product.category.map((single, key) => {
              return (
                <li key={key}>
                    {single}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
      {product.tag ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tag.map((single, key) => {
              return (
                <li key={key}>
                    {single}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="pro-details-social">
        <ul>
          <li>
            <a href="//facebook.com">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="//dribbble.com">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="//pinterest.com">
              <i className="fa fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="//twitter.com">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="//linkedin.com">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
};

export default ProductDescriptionInfo;
