import React, { Component } from "react";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mastermindstyle.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class EndGame extends Component {
  test() {
    console.log("submitted score:");
  }
  render() {
    const endGameInfoClass = classNames({
      endgame: true,
      hidden: !this.props.endGame,
    });
    const endGameStatusClass = classNames({
      "endgame-relative": true,
      success: this.props.success,
      failure: !this.props.success,
    });
    const infoText = this.props.success ? "Congratulations!" : "GAME OVER!";

    return (
      <div className={endGameInfoClass}>
        <div className={endGameStatusClass}>
          <h2>{infoText}</h2>
          <Button onClick={this.props.reloadGame}>PLAY AGAIN</Button>
          <Link to="/" onClick={this.test} className="btn btn-primary score">
            Submit score
          </Link>
          <p className="">Score: {this.props.score}</p>
        </div>
        <div className="endgame-relative endgame-overlay"></div>
      </div>
    );
  }
}

export default EndGame;
