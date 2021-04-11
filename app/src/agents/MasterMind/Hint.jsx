import React, { Component } from "react";
import "./Mastermindstyle.css";
class Hint extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state.currentRow - 1 <= nextProps.rowId;
  }
  render() {
    return <span className={this.props.hintClass}></span>;
  }
}

export default Hint;
