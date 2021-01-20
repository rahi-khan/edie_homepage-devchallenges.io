import React from "react";
import portfolioData from "./portfolioData";

const PortfolioList = () => {
    //! Render Portfolio List
    return (
        <div className={portfolioList}>
            {/*//* Cards */}

            {portfolioData.map(data => (
                <div className={card}>
                    <img src={data.imgSrc} className={imgStyles} alt={data.title} />

                    <h1 className={heading}>{data.title}</h1>

                    <h2 className={subheading}>{data.subtitle}</h2>
                </div>
            ))}
        </div>
    );
};

//! styles
const { portfolioList, imgStyles, heading, subheading, card } = {
    portfolioList: "grid grid-cols-1 lg:grid-cols-2 gap-7",
    card:
        "flex flex-col space-y-3 mb-6 p-6 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 duration-200",
    imgStyles: "rounded-3xl",
    heading: "font-pops font-light text-lg text-gray-500",
    subheading: "font-pops font-semibold text-2xl text-gray-600",
};

export default PortfolioList;
