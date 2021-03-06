import React, { Component } from 'react';
import Spinner from "./components/Spinner";
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <div className="layout-vp--full-height">
          <div className="main-content">
            <Header />
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
