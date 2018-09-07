import React from "react";

const Circle = props => {
  const color = props.color === "yellow" ? "circle--yellow" : "circle--green";
  const circleButton = props.isButton || false ? "circle-button" : "";
  let circleShadow = "";
  if (props.shadow) {
    circleShadow =
      props.shadow === "type1" ? "circle-shadow-1" : "circle-shadow-2";
  }
  let wingBladePosition = "";
  if (props.wingBladePosition) {
    switch (props.wingBladePosition) {
      case "top":
        wingBladePosition = "wing-blade-top";
        break;
      case "left":
        wingBladePosition = "wing-blade-left";
        break;
      case "right" :
        wingBladePosition = "wing-blade-right";
        break;
      default :
        wingBladePosition = "";
    }
  }
  return <div className={`circle ${color} ${circleButton} ${circleShadow} ${wingBladePosition}`} />;
};

export default Circle;
