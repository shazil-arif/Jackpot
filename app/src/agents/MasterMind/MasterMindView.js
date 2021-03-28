import React, { Component } from "react";
import Rules from "./Rules";
import "./Mastermindstyle.css";
export class MasterMindView extends Component {
  state = {
    rules: false,
    colors: new Map([
      [0, "zero"],
      [1, "one"],
      [2, "two"],
      [3, "three"],
      [4, "four"],
      [5, "five"],
    ]),
  };
  toggleRules = () => {
    this.setState({ rules: !this.state.rules });
  };
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h1>
          <span className="M">M</span>
          <span className="A">A</span>
          <span className="S">S</span>
          <span className="T">T</span>
          <span className="E">E</span>
          <span className="R">R</span>
          <span className="MIND">MIND</span>
        </h1>
        <Rules rules={this.state.rules} toggleRules={this.toggleRules} />
      </div>
    );
  }
}

export default MasterMindView;
