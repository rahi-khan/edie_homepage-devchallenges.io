import React from "react";

const IntroHeading = () => (
    <div className={introHeadingStyles}>
        <p className={paragraphStyles}>Unhappy with your website?</p>

        <h1 className={headingStyles}>
            We create beautiful <br /> and fast web services
        </h1>
    </div>
);

//! Styles
const { headingStyles, introHeadingStyles, paragraphStyles } = {
    introHeadingStyles: "flex flex-col space-y-4 pl-8 md:pl-20 lg:pl-48",
    paragraphStyles: "font-pops text-base font-medium md:text-xl text-blue-500",
    headingStyles: "font-pops font-medium text-2xl md:text-5xl text-gray-700",
};

export default IntroHeading;
