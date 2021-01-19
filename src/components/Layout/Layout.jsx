import React from "react";
import AppState from "../../context/AppState";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => (
    //! Render Footer UI
    <AppState>
        <Header />
        {children}
        <Footer />
    </AppState>
);

export default Layout;
