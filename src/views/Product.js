import React, { Fragment } from "react";
import LayoutSeven from "../layouts/LayoutSeven";
import { useSelector } from "react-redux";
import ProductDescriptionTab from "../layouts/wrappers/ProductDescriptionTab";
import ProductImageDescription from "../layouts/wrappers/ProductImageDescription";
import Breadcrumb from "../layouts/wrappers/Breadcrumb";
import ProductGridFiveContainer from "../layouts/wrappers/ProductGridFiveContainer";
import SectionTitle from "../components/section-title/SectionTitle";
import { selectProducts } from "../stores/productSlice";

const Product = (props) => {
  const itemId = parseInt(props.match.params.id);
  const products = useSelector(selectProducts);
  const product = products.filter(
    single => single.product_id === itemId
  )[0];
  return (
    <Fragment>
      <LayoutSeven>
        <Breadcrumb />
        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />
        {/* product description tab */}
        <ProductDescriptionTab spaceBottomClass="pb-90" product={product} />

        <div className="related-product-area">
          <div className="container">
            <SectionTitle
              titleText="Related Products"
              positionClass="text-center"
              spaceClass="mb-50"
            />
            <div className="row">
              <ProductGridFiveContainer
                spaceBottomClass="pb-100"
                products={products.filter((single) => single.product_id !== itemId)}
              />
            </div>
          </div>
        </div>
      </LayoutSeven>
    </Fragment>
  );
};

export default Product;