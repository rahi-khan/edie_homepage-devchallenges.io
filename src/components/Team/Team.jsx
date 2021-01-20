import React from "react";
import Desc from "./TeamComponents/Desc";
import Images from "./TeamComponents/Images";

const Team = () => (
    //! Render Services UI
    <div className={teamStyles}>
        <Desc />
        <Images />
    </div>
);

//! Styles
const { teamStyles } = {
    teamStyles: "flex flex-col md:flex-row md:justify-between pb-36",
};

export default Team;
