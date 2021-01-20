import React from "react";
import PortfolioHeading from "./PortfolioComponents/PortfolioHeading";
import PortfolioList from "./PortfolioComponents/PortfolioList";

const Portfolio = () => {
    //! Render Portfolio UI
    return (
        <div className={portfolioStyles}>
            <PortfolioHeading />
            <PortfolioList />
        </div>
    );
};

//! Styles
const { portfolioStyles } = {
    portfolioStyles: "flex flex-col space-y-16 pb-36",
};

export default Portfolio;
