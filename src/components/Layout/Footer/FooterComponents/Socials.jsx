import React from "react";
import { IconContext } from "react-icons";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

const Socials = () => {
    return (
        <div>
            <h1 className={heading}>Edie</h1>
            <div className={socialsContainer}>
                <IconContext.Provider value={{ size: "1.5rem", className: `${socialIcons}` }}>
                    <FiInstagram />
                    <GrLinkedin />
                    <FaTwitter />
                </IconContext.Provider>
            </div>
        </div>
    );
};

//! styles
const { socialIcons, socialsContainer, heading } = {
    socialIcons: "hover:text-gray-300 hover:shadow-lg duration-200 cursor-pointer",
    socialsContainer: "flex space-x-4",
    heading: "text-4xl font-heeb font-extrabold mb-3",
};

export default Socials;
