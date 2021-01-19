import React from "react";
import Heading from "./ServicesComponents/Heading";
import ServicesList from "./ServicesComponents/ServicesList";

const Services = () => (
    //! Render Services UI
    <div className={servicesStyles}>
        <Heading />
        <ServicesList />
    </div>
);

//! Styles
const { servicesStyles } = {
    heroStyles: "flex flex-col space-y-12 py-36 px-5 md:px-16",
};

export default Services;
