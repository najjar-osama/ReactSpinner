import React from "react";


const SpinnerControlPanel = (props)=>(
    <div className="spinner-control-panel-wrapper">
        <div className="button-group">
            <button className="btn" onClick={props.toggleTurbo}>Turbo</button>
            <button className="btn" onClick={props.spin}>Spin!</button>
        </div>
    </div>
)

export default SpinnerControlPanel;