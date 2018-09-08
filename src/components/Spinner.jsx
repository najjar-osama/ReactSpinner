import React from "react";

import Circle from "./Circle";
import SpinnerControlPanel from "./SpinnerControlPanel";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.spin = this.spin.bind(this);
    this.toggleTurbo = this.toggleTurbo.bind(this);
    this.state = {
      spinState: {
        rotateDeg: 50
      },
      spinStyle: {
        transform: "rotate(50deg)"
      },
      turbo: {
        mode : "turbo-off",
        active : false
      }
    };
  }

  spin() {
    this.setState((state) => {
      const currentRotationDegree = state.spinState.rotateDeg;
      const nextRotationDegree = currentRotationDegree + 720;
      const nextRotationStyle = `rotate(${nextRotationDegree}deg)`;
      return {
        spinState: {
          rotateDeg: nextRotationDegree
        },
        spinStyle: {
          transform: nextRotationStyle
        }
      }
    });
  }
  toggleTurbo (){
    this.setState((state)=>{
      const nextTurboMode = state.turbo.active ? "turbo-off" : "turbo-on";
      const nextActiveState = !state.turbo.active;
      return {
        turbo: {
          mode : nextTurboMode,
          active : nextActiveState
        }
      }
    });
  }
  render() {
    return (
      <div className="spinner-root">
        <div className="container">
          <div className="flex flex-align--center flex-content--center">
            <div className="spinner-wrapper" >
              <div className={`spinner-body ${this.state.turbo.mode}`} style={this.state.spinStyle}>
                <div className="spinner-row spinner-row--top">
                  <Circle shadow="type1" wingBladePosition="top" />
                </div>
                <div
                  className="spinner-row spinner-row--center"
                  onClick={this.spin}
                >
                  <Circle color="yellow" isButton={true} />
                </div>
                <div className="spinner-row spinner-row--bottom">
                  <Circle shadow="type1" wingBladePosition="left" />
                  <Circle shadow="type2" wingBladePosition="right" />
                </div>
              </div>
              <SpinnerControlPanel spin={this.spin} turboIsActive={this.state.turbo.active} toggleTurbo={this.toggleTurbo} />
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Spinner;
