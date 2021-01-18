import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HeroImage = () => {
    //! Query image data
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "heroImage.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return <Img fluid={data.file.childImageSharp.fluid} className={imgStyles} />;
};

//! Styles
const { imgStyles } = {
    imgStyles: "rounded-lg w-full",
};

export default HeroImage;
