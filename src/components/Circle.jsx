import React from "react";


const Circle = (props)=>{
    const color = props.color === "blue"? "circle--blue" : "circle--red";
    return(<div className={`circle ${color}`}>
    </div>);
}

export default Circle;