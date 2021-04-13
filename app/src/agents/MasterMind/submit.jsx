import React, { Component } from "react";
import classNames from "classnames";
import "./Mastermindstyle.css";
class SubmitButton extends Component {
  render() {
    const className = classNames({
      submit: true,
      hidden: !(
        this.props.state.currentGuess.size >= this.props.state.pegsInRow &&
        this.props.state.currentRow === this.props.rowId
      ),
    });

    return (
      <button className={className} onClick={this.props.submitPegs}></button>
    );
  }
}

export default SubmitButton;
