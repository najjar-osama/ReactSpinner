import React from "react";

const SpinnerControlPanel = props => (
  <div className="spinner-control-panel-wrapper">
    <div className="button-group">
      <button
        className={`btn ${props.turboIsActive ? "turbo-active" : ""}`}
        onClick={props.toggleTurbo}
      >
        Turbo
      </button>
      <button className="btn" onClick={props.spin}>
        Spin!
      </button>
      
    </div>
    {props.turboIsActive?<p className="status-bar" >Turbo is now active!</p>:""}
  </div>
);

export default SpinnerControlPanel;
