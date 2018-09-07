import React from "react";

import Circle from "./Circle";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.spin = this.spin.bind(this);
    this.state = {
      spinState: {
        rotateDeg: 50
      },
      spinStyle: {
        transform: "rotate(50deg)"
      }
    };
  }

  spin() {
    const currentRotationDegree = this.state.spinState.rotateDeg;
    const nextRotationDegree = currentRotationDegree + 720;
    const nextRotationStyle = `rotate(${nextRotationDegree}deg)`;
    this.setState(() => ({
      spinState: {
        rotateDeg: nextRotationDegree
      },
      spinStyle: {
        transform: nextRotationStyle
      }
    }));
  }
  render() {
    return (
      <div className="spinner-root">
        <div className="container">
          <div className="flex flex-align--center flex-content--center">
            <div className="spinner-wrapper" style={this.state.spinStyle}>
              <div className="spinner-row spinner-row--top">
                <Circle shadow="type1" wingBladePosition="top" />
              </div>
              <div className="spinner-row spinner-row--center" onClick={this.spin}>
                <Circle color="yellow" isButton={true}/>
              </div>
              <div className="spinner-row spinner-row--bottom">
                <Circle shadow="type1" wingBladePosition="left" />
                <Circle shadow="type2" wingBladePosition="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
