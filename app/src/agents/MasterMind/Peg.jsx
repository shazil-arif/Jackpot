import React, { Component } from "react";
import "./Mastermindstyle.css";
import Button from "react-bootstrap/Button";
class Peg extends Component {
  render() {
    return (
      <span className={this.props.pegClass}>
        <input
          type="radio"
          value={this.props.value}
          name={this.props.name}
          id={this.props.idVal}
          onClick={this.props.isCurrentRow ? this.props.active : null}
        ></input>
        <label htmlFor={this.props.idVal}></label>
      </span>
    );
  }
}

export default Peg;
