import React from "react";

const SecondHeading = () => (
    <div className={secondHeadingStyles}>
        <h1 className={headingStyles}>
            Story, emotion <br /> and purpose
        </h1>

        <p className={paragraphStyles}>
            We help transform your ideas into real <br />
            world applications that will outperform <br />
            your toughest competition and help you <br />
            achieve your strategic goals in short <br />
            period of time.
        </p>
    </div>
);

//! Styles
const { headingStyles, secondHeadingStyles, paragraphStyles } = {
    secondHeadingStyles: "flex flex-col space-y-4 pl-8 md:pl-48",
    paragraphStyles: "font-pops font-normal text-sm md:text-lg text-gray-500",
    headingStyles: "font-pops font-medium text-2xl md:text-5xl text-gray-700",
};

export default SecondHeading;
