import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import Brand from "./HeaderComponents/Brand";
import Menubar from "./HeaderComponents/Menubar";
import NavItems from "./HeaderComponents/NavItems";

const Header = () => {
    const appContext = useContext(AppContext);
    
    const { navStyles } = appContext;

    //? Render Header UI
    return (
        <nav className={navStyles}>
            {/*//// Brand Name/logo */}
            <Brand />

            {/*//// Hamburger Menu */}
            <Menubar />

            {/*//// Nav Items */}
            <NavItems />
        </nav>
    );
};

export default Header;
