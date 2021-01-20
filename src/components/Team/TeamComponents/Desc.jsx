import React from "react";

const Desc = () => (
    //! Render description UI
    <div className={descContainer}>
        <h2 className={heading1}>Meet the team</h2>
        <h1 className={heading2}>
            We are chilled <br /> and a laidback <br /> team
        </h1>
        <p className={paragraph}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>
    </div>
);

//! Styles
const { descContainer, heading1, heading2, paragraph } = {
    descContainer: "flex flex-col justify-center space-y-4 pb-8 lg:pb-0",
    heading1: "font-pops font-medium text-lg text-red-600 text-center lg:text-left",
    heading2: "font-pops font-medium text-4xl text-center lg:text-left",
    paragraph: "font-pops font-normal text-base text-center lg:text-left",
};

export default Desc;
