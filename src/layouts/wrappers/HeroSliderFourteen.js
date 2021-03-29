import React from "react";
import heroSliderData from "../data/hero-slider-fourteen.json";
import HeroSliderFourteenSingle from "../../components/hero-slider/HeroSliderFourteenSingle";


const HeroSliderFourteen = () => {

  return (
    <div className="slider-area">
      <div className="slider-active-2 nav-style-3">
        <HeroSliderFourteenSingle data={heroSliderData[0]}/>
      </div>
    </div>
  );
};

export default HeroSliderFourteen;
