import React, { Component } from "react";
import "./Mastermindstyle.css";
import Peg from "./Peg";
class CodePegs extends Component {
  test() {
    console.log("clicked");
  }
  generatechoice() {
    const pegs = [];
    let id;
    let pegClass;

    for (let [key, value] of this.props.colors) {
      id = "peg-" + key;
      pegClass = "peg " + value;
      if (value === this.props.selectedPeg) {
        pegClass = pegClass + " selected";
      }
      pegs.push(
        <Peg
          idVal={id}
          value={value}
          key={id}
          pegClass={pegClass}
          isCurrentRow={true}
          active={this.props.active}
        />
      );
    }
    return pegs;
  }
  render() {
    return <div className="codepegs right">{this.generatechoice()}</div>;
  }
}

export default CodePegs;
