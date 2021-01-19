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
    servicesStyles: "flex flex-col space-y-16 pb-36",
};

export default Services;
