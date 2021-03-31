import React, { Component } from "react";
import Row from "./Row";
import "./Mastermindstyle.css";
let times = (n) => {
  return (f) => {
    Array(n)
      .fill()
      .map((_, i) => f(i));
  };
};
class DecodingBoard extends Component {
  render() {
    let rows = [];
    let rowName;

    let generateRow = (i) => {
      rowName = "decodeRow-" + i + 1;
      rows.push(
        <Row
          name={rowName}
          key={i + 1}
          rowId={i}
          state={this.props.state}
          active={this.props.active}
          submitPegs={this.props.submitPegs}
        />
      );
    };

    times(this.props.state.attempts)(generateRow);

    return <div className="left">{rows}</div>;
  }
}

export default DecodingBoard;
