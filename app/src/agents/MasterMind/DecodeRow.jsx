import React, { Component } from "react";
import Peg from "./Peg";
import "./Mastermindstyle.css";
let times = (n) => {
  return (f) => {
    Array(n)
      .fill()
      .map((_, i) => f(i));
  };
};

class DecodeRow extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state.currentRow <= nextProps.rowId;
  }
  render() {
    let pegs = [];
    let idVal;
    let pegClass;

    let generatePeg = (i) => {
      idVal = this.props.name + "-" + i + 1;
      //update current row
      if (this.props.state.currentRow === this.props.rowId) {
        pegClass = this.props.state.currentGuess.get(i)
          ? "peg " + this.props.state.currentGuess.get(i)
          : "peg";
      } else {
        //clear all of the next pegs - from the previous game
        pegClass = "peg";
      }

      pegs.push(
        <Peg
          idVal={idVal}
          name={this.props.name}
          value={i + 1}
          key={idVal}
          pegClass={pegClass}
          isCurrentRow={this.props.isCurrentRow}
          active={this.props.active}
        />
      );
    };

    times(this.props.state.pegsInRow)(generatePeg);

    return <div className="decode-row">{pegs}</div>;
  }
}

export default DecodeRow;
