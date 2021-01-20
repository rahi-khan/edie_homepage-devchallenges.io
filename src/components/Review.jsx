import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Review = () => {
    //! Query image data
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "person4.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    //! Render review UI
    return (
        <div className={review}>
            <blockquote className={quote}>
                “Fast and outstanding resutls. Edie understands their customer’s needs. They have a
                young and talented team.”
            </blockquote>

            <div className={person}>
                <Img fluid={data.file.childImageSharp.fluid} className={imgStyles} />

                <div>
                    <h3 className={personName}>Carlos Tran</h3>
                    <p className={idkWhatToNameThis}>The Decorate Gatsby</p>
                </div>
            </div>
        </div>
    );
};

//! Styles
const { imgStyles, review, quote, person, personName, idkWhatToNameThis } = {
    review: "pb-36",
    quote: "font-pops font-medium text-xl md:text-3xl w-full xl:w-2/3 mb-8",
    imgStyles: "rounded-xl w-20 h-20 mr-6",
    person: "flex items-center",
    personName: "text-xl md:text-2xl font-pops font-medium text-gray-800 mb-2",
    idkWhatToNameThis: "font-pops font-medium text-gray-500",
};

export default Review;
