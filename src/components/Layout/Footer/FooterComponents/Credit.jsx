import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Credit = () => {
    //! Query Page Data
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <h6 className={credit}>
            <a href="https://twitter.com/rahikhan_dev">{data.site.siteMetadata.author}</a>{" "}
            <a href="https://devchallenges.io/">@ DevChallenges.io</a>
        </h6>
    );
};

//! Styles
const { credit } = {
    credit: "text-center text-white font-semibold py-4",
};

export default Credit;
