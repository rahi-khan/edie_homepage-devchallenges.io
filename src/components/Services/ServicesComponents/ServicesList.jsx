import React from "react";
import Card from "./Card";
import { useStaticQuery, graphql } from "gatsby";

const ServicesList = () => {
    //! Query Card data
    const data = useStaticQuery(graphql`
        {
            allServicesCardJson {
                nodes {
                    title
                    initialColor
                    hoverColor
                }
            }
        }
    `);
    //! Render Services List
    return (
        <div className={cardList}>
            {data.allServicesCardJson.nodes.map(node => (
                <Card
                    title={node.title}
                    initialColor={node.initialColor}
                    hoverColor={node.hoverColor}
                />
            ))}
        </div>
    );
};

//! styles
const { cardList } = {
    cardList: "grid grid-cols-1 lg:grid-cols-3 gap-7",
};

export default ServicesList;
