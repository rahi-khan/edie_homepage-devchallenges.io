import React from "react";
import IntroHeading from "./IntroHeading";
import HeroImage from "./HeroImage";
import SecondHeading from "./SecondHeading";
import CTA from "./CTA";

const Hero = () => (
    //! Render Home UI
    <div className={heroStyles}>
        <IntroHeading />
        <HeroImage />
        <SecondHeading />
        <CTA />
    </div>
);

//! Styles
const { heroStyles } = {
    heroStyles: "flex flex-col space-y-12 py-16 px-5 md:px-16",
};
export default Hero;
