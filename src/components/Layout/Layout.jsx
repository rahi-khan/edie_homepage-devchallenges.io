import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => (
    //! Render Footer UI
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;
