import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Brand = () => (
    //! Render Brand Name
    <Link to="/" className={styles.brandName}>
        <h1>Edie</h1>
    </Link>
);

//! Styles
const styles = {
    brandName: "pl-10 text-2xl font-heeb font-extrabold md:text-4xl",
};

export default Brand;
