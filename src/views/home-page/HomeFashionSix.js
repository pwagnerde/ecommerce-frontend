import React, { Fragment } from "react";
import LayoutSeven from "../../layouts/LayoutSeven";
import HeroSliderFourteen from "../../layouts/wrappers/HeroSliderFourteen";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import CountDownThree from "../../layouts/wrappers/CountDownThree";
import ProductGridFiveContainer from "../../layouts/wrappers/ProductGridFiveContainer";
import FeatureIconTwo from "../../layouts/wrappers/FeatureIconTwo";

const HomeFashionSix = () => {

  
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
          dateTime="November 13, 2021 12:12:00"
          countDownImage="/assets/img/banner/deal-2.png"
        />
        {/* product grid */}
        <ProductGridFiveContainer
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          category="electronics"
        />
        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
      </LayoutSeven>
    </Fragment>
  );
};

export default HomeFashionSix;

/*

*/