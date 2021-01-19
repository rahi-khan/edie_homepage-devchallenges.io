import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiOutlineCode } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";

const Card = ({ title, initialColor, hoverColor }) => {
    //! Styles
    const { buttonStyles, card, iconStyles, headingStyle, descStyle } = {
        card:
            "group flex flex-col items-start space-y-6 p-7 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 duration-200",
        iconStyles: `${initialColor} group-hover:${hoverColor} text-white p-3 rounded-2xl duration-200`,
        headingStyle: "text-2xl font-bold text-gray-800",
        descStyle: "font-pops font-normal text-sm md:text-base text-gray-500",
        buttonStyles:
            "rounded-lg px-4 py-2 bg-gray-400 group-hover:bg-blue-500 hover:bg-blue-600 text-white font-pops font-medium duration-200",
    };

    //! Render Card UI
    return (
        <div className={card}>
            <div className={iconStyles}>
                <IconContext.Provider value={{ size: "1.8rem" }}>
                    {title === "UI/UX Design" ? (
                        <FaPencilAlt />
                    ) : title === "Front End" ? (
                        <HiOutlineCode />
                    ) : title === "Back End" ? (
                        <AiFillDatabase />
                    ) : (
                        ""
                    )}
                </IconContext.Provider>
            </div>

            <h1 className={headingStyle}>{title}</h1>

            <p className={descStyle}>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Duis a <br /> metus
                ac nulla consequat aliquet <br /> id quis turpis.
            </p>

            <button type="submit" href="/" className={buttonStyles}>
                Get started
            </button>
        </div>
    );
};

export default Card;
