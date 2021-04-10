import React, { Fragment } from "react";
import LayoutSeven from "../layouts/LayoutSeven";
import HeroSliderFourteen from "../layouts/wrappers/HeroSliderFourteen";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import CountDownThree from "../layouts/wrappers/CountDownThree";
import ProductGridFiveContainer from "../layouts/wrappers/ProductGridFiveContainer";
import FeatureIconTwo from "../layouts/wrappers/FeatureIconTwo";
import { selectProducts, selectStatus } from "../stores/productSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector(selectProducts).slice(0, 4);
  const status = useSelector(selectStatus);

  return (
    <Fragment>
      <LayoutSeven>
        {/* hero slider */}
        <HeroSliderFourteen />
        {/* section title */}
        <SectionTitleWithText spaceTopClass="pt-95" spaceBottomClass="pb-90" />
        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="May 13, 2021 12:12:00"
          countDownImage="/img/banner/ledger-nano-x-1-special.png"
        />
        {/* product grid */}
        {status === "succeeded" ? (
          <ProductGridFiveContainer
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            products={products}
          />
        ) : (
          <p>"Loading in process"</p>
        )}
        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
      </LayoutSeven>
    </Fragment>
  );
};

export default Home;
