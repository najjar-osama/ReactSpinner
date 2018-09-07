import React from "react";


const Circle = (props)=>{
    const color = props.color === "blue"? "circle--blue" : "circle--red";
    const circleButton = props.isButton || false ? "circle-button" : "";
    return(<div className={`circle ${color} ${circleButton}`}>
    </div>);
}

export default Circle;