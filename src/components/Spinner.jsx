import React from "react";

import Circle from "./Circle";

const Spinner = () => (
  <div className="spinner-root">
    <div className="container">
      <div className="flex flex-align--center flex-content--center">
        <div className="spinner-wrapper">
          <div className="spinner-button-block">
            <Circle color="blue" isButton={true}/>
          </div>
          <div className="spinner-row spinner-row--top">
            <Circle />
          </div>
          <div className="spinner-row spinner-row--bottom">
            <Circle />
            <Circle />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
