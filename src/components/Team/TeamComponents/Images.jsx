import React from "react";
import person1 from "../../../images/person1.png";
import person2 from "../../../images/person2.png";
import person3 from "../../../images/person3.png";

const Images = () => (
    //! Render images UI
    <div className="flex items-center justify-center md:justify-end space-x-4 md:pl-8">
        <img src={person3} className={img} width="40%" alt="Person 1" />

        <div className="flex flex-col space-y-4">
            <img src={person1} className={img} width="50%" alt="Person 3" />
            <img src={person2} className={img} width="66.666667%" alt="Person 2" />
        </div>
    </div>
);

//! styles
const { img } = { img: "rounded-2xl" };

export default Images;
