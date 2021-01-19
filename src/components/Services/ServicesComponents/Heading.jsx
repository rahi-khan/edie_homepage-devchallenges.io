import React from "react";

const Heading = () => (
    <h1 className={headingStyles}>
        We offer high <br /> demand services
    </h1>
);

//! Styles
const { headingStyles } = {
    headingStyles: "font-pops font-medium text-2xl md:text-4xl text-gray-700",
};

export default Heading;
