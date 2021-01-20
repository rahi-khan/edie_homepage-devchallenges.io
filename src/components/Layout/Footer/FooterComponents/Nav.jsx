import React, { useContext } from "react";
import { Link } from "gatsby";
import AppContext from "../../../../context/AppContext";

const Nav = () => {
    const appContext = useContext(AppContext);

    const { navList } = appContext;

    return (
        <div className={nav}>
            {navList.map((navItem, idx) => (
                <Link to="/" key={idx}>
                    <span className="capitalize hover:text-gray-300 hover:shadow-lg duration-200">
                        {navItem}
                    </span>
                </Link>
            ))}
        </div>
    );
};

//! styles
const { nav } = {
    nav: "flex flex-col space-y-4 font-pops font-normal text-base",
};

export default Nav;
