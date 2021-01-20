import React from "react";

const PortfolioHeading = () => (
    <h1 className={headingStyles}>
        Good design means <br /> good business
    </h1>
);

//! Styles
const { headingStyles } = {
    headingStyles: "font-pops font-medium text-2xl md:text-4xl text-gray-700",
};

export default PortfolioHeading;
