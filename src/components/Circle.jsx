import React from "react";


const Circle = (props)=>{
    const color = props.color === "yellow"? "circle--yellow" : "circle--green";
    const circleButton = props.isButton || false ? "circle-button" : "";
    let circleShadow = "";
    if(props.shadow){
        circleShadow = props.shadow === "type1" ? "circle-shadow-1" :"circle-shadow-2";
    }
    return(<div className={`circle ${color} ${circleButton} ${circleShadow}`}>
    </div>);
}

export default Circle;