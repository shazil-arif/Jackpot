import React, { Component } from "react";
import "./Mastermindstyle.css";
import Peg from "./Peg";
class CodePegs extends Component {
  render() {
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
          name="peg"
          key={id}
          value={value}
          pegClass={pegClass}
          isCurrentRow={true}
          active={this.props.active}
          start={this.props.start}
        />
      );
    }
    return <div className="codepegs right">{pegs}</div>;
  }
}

export default CodePegs;
