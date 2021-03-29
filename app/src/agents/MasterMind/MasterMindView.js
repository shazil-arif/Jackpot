import React, { Component } from "react";
import Rules from "./Rules";
import CodePegs from "./CodePegs";
import Peg from "./Peg";
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
    code: null, //the main code to be decoded
    selectedPeg: "zero",
    currentRow: 0,
    currentGuess: new Map(),
    exactMatches: 0,
    valueMatches: 0,
    pegsInRow: 4,
    attempts: 10,
    success: false,
    endGame: false,
  };

  activatePeg = (val) => {
    console.log("this one is selected", val);
    this.setState({ selectedPeg: val });
    if (this.state.selectedPeg) {
      this.setState({
        currentGuess: this.state.currentGuess.set(
          val - 1,
          this.state.selectedPeg
        ),
      });
    }
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
        <div>
          <CodePegs
            selectedPeg={this.state.selectedPeg}
            colors={this.state.colors}
            active={this.activatePeg}
          />
        </div>
      </div>
    );
  }
}

export default MasterMindView;
