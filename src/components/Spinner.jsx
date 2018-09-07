import React from "react";

import Circle from "./Circle";

const Spinner = () => (
  <div className="spinner-root">
    <div className="container">
      <div className="flex flex-align--center flex-content--center">
        <div className="spinner-wrapper">
          <div className="spinner-row spinner-row--top">
            <Circle shadow="type1"/>
          </div>
          <div className="spinner-row spinner-row--bottom">
            <Circle shadow="type1"/>
            <Circle shadow="type2"/>
          </div>
          <div className="spinner-button-block">
            <Circle color="yellow" isButton={true}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
