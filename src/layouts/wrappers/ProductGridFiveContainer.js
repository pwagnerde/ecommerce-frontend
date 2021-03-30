import PropTypes from "prop-types";
import React from "react";
import ProductGridFive from "./ProductGridFive";

const ProductGridFiveContainer = ({
  spaceTopClass,
  spaceBottomClass,
  products
}) => {
  return (
    <div
      className={`product-area hm5-section-padding ${
        spaceTopClass ? spaceTopClass : ""
      }  ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="row">
          <ProductGridFive
            products={products}
            spaceBottomClass="mb-20"
          />
        </div>
      </div>
    </div>
  );
};

ProductGridFiveContainer.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default ProductGridFiveContainer;
