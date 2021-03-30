import PropTypes from "prop-types";
import React from "react";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageFixed from "../../components/product/ProductImageFixed";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import { useSelector } from "react-redux";
import {selectCurrencyRate
} from "../../stores/productSlice";

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  product,
}) => {
  const currencyRate = useSelector(selectCurrencyRate);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currencyRate).toFixed(2);
  const finalDiscountedPrice = +(discountedPrice * currencyRate).toFixed(2);

  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image fixed */}
            <ProductImageFixed product={product} />
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  product: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};


export default ProductImageDescription;
