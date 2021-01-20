import React from "react";
import portfolioData from "./portfolioData";

const PortfolioList = () => {
    //! Render Portfolio List
    return (
        <div className={portfolioList}>
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
        "flex flex-col items-center space-y-3 mb-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 duration-200 transform lg:odd:translate-y-40",
    imgStyles: "rounded-3xl lg:w-10/12",
    heading: "font-pops font-light text-lg text-gray-500",
    subheading: "font-pops font-semibold pb-5 text-2xl text-gray-600",
};

export default PortfolioList;
