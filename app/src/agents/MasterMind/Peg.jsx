import React, { Component } from "react";
import "./Mastermindstyle.css";
import Button from "react-bootstrap/Button";
class Peg extends Component {
  test() {
    console.log("this is clicked");
  }
  render() {
    return (
      <span className={this.props.pegClass}>
        <input
          type="radio"
          value={this.props.value}
          id={this.props.idVal}
          onClick={() => {
            this.props.active(this.props.value);
          }}
        ></input>
        <label htmlFor={this.props.idVal}></label>
      </span>
    );
  }
}

export default Peg;
