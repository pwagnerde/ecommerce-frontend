import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridSingleFive from "../../components/product/ProductGridSingleFive";
import { addToCart, selectCarts } from "../../stores/cartSlice";

const ProductGridFive = ({
  sliderClassName,
  spaceBottomClass,
  products
}) => {

  const cartItems = useSelector(selectCarts);
  return (
    <Fragment>
      {products.map(product => {
        return (
          <ProductGridSingleFive
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            addToCart={addToCart}
            cartItem={
              cartItems.filter(cartItem => cartItem.id === product.id)[0]
            }
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGridFive.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  products: PropTypes.array,

};


export default ProductGridFive;
