import React from "react";
import Credit from "./FooterComponents/Credit";
import FooterCTA from "./FooterComponents/FooterCTA";
import Nav from "./FooterComponents/Nav";
import Socials from "./FooterComponents/Socials";

const Footer = () => (
    //! Render Footer UI
    <div className={background}>
        <div className={footer}>
            <div className={footerContent}>
                <Nav />
                <Socials />
                <FooterCTA />
            </div>
            <Credit />
        </div>
    </div>
);

//! Styles
const { background, footer, footerContent } = {
    background: "bg-blue-600",
    footer: "container mx-auto px-5 md:px-32 text-white",
    footerContent: "pt-16 pb-28 grid grid-cols-1 gap-y-16 lg:gap-y-0 gap-4 lg:grid-cols-3",
};

export default Footer;
