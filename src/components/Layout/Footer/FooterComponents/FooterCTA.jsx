import React from "react";

const FooterCTA = () => {
    return (
        <div className={ctaContainerStyles}>
            <p className={headingStyles}>Want us to contact you?</p>

            <div className={ctaStyles}>
                <input type="email" placeholder="Email" className={inputStyles} />
                <button type="submit" href="/" className={buttonStyles}>
                    Join
                </button>
            </div>
        </div>
    );
};

//! Styles
const { ctaContainerStyles, ctaStyles, buttonStyles, inputStyles, headingStyles } = {
    ctaContainerStyles: "flex flex-col space-y-2",
    headingStyles: "font-pops font-medium text-sm md:text-base",
    ctaStyles: "font-pops font-normal text-lg",
    buttonStyles:
        "rounded-lg px-6 py-2 absolute bg-blue-500 hover:bg-blue-600 text-white mt-1 -m-20.6 duration-200 font-pops",
    inputStyles:
        "rounded-lg w-4/5 lg:w-full px-6 py-3 relative text-gray-600 bg-gray-100 focus:outline-none shadow-2xl",
};

export default FooterCTA;
