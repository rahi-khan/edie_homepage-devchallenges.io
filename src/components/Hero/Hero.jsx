import React from "react";
import IntroHeading from "./HeroComponents/IntroHeading";
import HeroImage from "./HeroComponents/HeroImage";
import SecondHeading from "./HeroComponents/SecondHeading";
import CTA from "./HeroComponents/CTA";

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
    heroStyles: "flex flex-col space-y-12 py-36 px-5 md:px-16",
};

export default Hero;
