import React from "react";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { AiFillDatabase } from "react-icons/ai";

const ServicesList = () => (
    //! Render Services List
    <div className={cardList}>
        {/*//* Card 1 */}
        <div className={card}>
            <div className={`bg-blue-300 group-hover:bg-blue-500 ${iconStyles}`}>
                <IconContext.Provider value={{ size: "1.8rem" }}>
                    <FaPencilAlt />
                </IconContext.Provider>
            </div>

            <h1 className={headingStyle}>UI/UX Design</h1>

            <p className={descStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla
                consequat aliquet id quis turpis.
            </p>

            <button type="submit" href="/" className={buttonStyles}>
                Get started
            </button>
        </div>

        {/*//* Card 2 */}
        <div className={card}>
            <div className={`bg-green-300 group-hover:bg-green-500 ${iconStyles}`}>
                <IconContext.Provider value={{ size: "1.8rem" }}>
                    <HiOutlineCode />
                </IconContext.Provider>
            </div>

            <h1 className={headingStyle}>Front End</h1>

            <p className={descStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla
                consequat aliquet id quis turpis.
            </p>

            <button type="submit" href="/" className={buttonStyles}>
                Get started
            </button>
        </div>

        {/*//* Card 3 */}
        <div className={card}>
            <div className={`bg-red-300 group-hover:bg-red-500 ${iconStyles}`}>
                <IconContext.Provider value={{ size: "1.8rem" }}>
                    <AiFillDatabase />
                </IconContext.Provider>
            </div>

            <h1 className={headingStyle}>Back End</h1>

            <p className={descStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla
                consequat aliquet id quis turpis.
            </p>

            <button type="submit" href="/" className={buttonStyles}>
                Get started
            </button>
        </div>
    </div>
);

//! styles
const { cardList, buttonStyles, card, headingStyle, iconStyles, descStyle } = {
    cardList: "grid grid-cols-1 lg:grid-cols-3 gap-7",
    card:
        "group flex flex-col items-start space-y-6 p-7 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 duration-200",
    headingStyle: "text-2xl font-bold text-gray-800",
    iconStyles: "text-white p-3 rounded-2xl duration-200",
    descStyle: "font-pops font-normal text-sm md:text-base text-gray-500",
    buttonStyles:
        "rounded-lg px-4 py-2 bg-gray-400 group-hover:bg-blue-500 hover:bg-blue-600 text-white font-pops font-medium duration-200",
};

export default ServicesList;
