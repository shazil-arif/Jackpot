import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mastermindstyle.css";
import classNames from "classnames";
class Rules extends Component {
  displayText() {
    return !this.props.rules ? "Show rules" : "Hide rules";
  }
  render() {
    const className = classNames({
      info: true,
      hidden: !this.props.rules,
    });
    const infoText = !this.props.rules ? "Show rules" : "Hide rules";

    return (
      <div>
        <Button className="Button_rule" onClick={this.props.toggleRules}>
          {this.displayText()}
        </Button>
        <p hidden={!this.props.rules}>
          <span>
            Try to guess the pattern with correct colors and order of the key
            pegs within limited number of turns. After submitting your guess, a
            small black peg is placed for each code peg from the guess which is
            correct in both color and position. A white peg indicates the
            existence of a correct color code peg placed in the wrong position.
            Specifics:
          </span>
          <a
            href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
            target="_blank"
          >
            Click here
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Rules;
