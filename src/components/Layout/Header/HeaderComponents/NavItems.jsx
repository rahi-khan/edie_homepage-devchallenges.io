import React from "react";
import { Link } from "gatsby";

//! Nav List
const navList = ["home", "services", "our works", "clients", "contact"];

const NavItems = ({ isOpen }) => (
    //! Render Nav Lists
    <div
        className={
            isOpen
                ? "flex flex-col justify-center items-center space-y-7 text-center bg-white text-black w-full h-screen absolute top-20 pb-24 md:block z-50 font-bold text-3xl"
                : "hidden md:block"
        }
    >
        {navList.map((navItem, idx) => (
            <Link to="/" className={itemStyles} key={idx}>
                <span className="capitalize"> {navItem} </span>
            </Link>
        ))}
    </div>
);

//! Styles
const { itemStyles } = {
    itemStyles:
        "font-pops font-medium text-gray-700 hover:text-black md:pr-7 last:pr-0",
};

export default NavItems;
