import React from "react";
import { Link } from "gatsby";

const Brand = () => (
    //! Render Brand Name
    <Link to="/" className={brandNameStyles}>
        <h1>Edie</h1>
    </Link>
);

//! Styles
const { brandNameStyles } = {
    brandNameStyles: "text-2xl font-heeb font-extrabold md:text-4xl",
};

export default Brand;
