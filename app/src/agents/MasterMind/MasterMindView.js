import React, { Component } from "react";
import Rules from "./Rules";
import CodePegs from "./CodePegs";
import Peg from "./Peg";
import EndGame from "./EndGame";
import DecodingBoard from "./DecodingBoard";
import "./Mastermindstyle.css";
import Modal_page from "./Modal";
let times = (n) => {
  return (f) => {
    Array(n)
      .fill()
      .map((_, i) => f(i));
  };
};
export class MasterMindView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: false,
      colors: new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
      ]),
      code: null, //the main code to be decoded
      selectedPeg: "one",
      currentRow: 0,
      currentGuess: new Map(),
      exactMatches: 0,
      valueMatches: 0,
      pegsInRow: 4,
      attempts: 2,
      success: false,
      endGame: false,
      start: false,
      score: 2,
    };
  }

  getRandomArbitrary(min = 0, max = 5) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getCode = () => {
    const code = new Map();
    let generateCode = (i) => {
      code.set(i, this.state.colors.get(this.getRandomArbitrary()));
    };

    times(4)(generateCode);
    this.setState({ code: code }, () => {
      console.log(this.state.code);
    });
  };

  activatePeg = (event) => {
    if (event.target.getAttribute("name").startsWith("peg")) {
      this.setState({ selectedPeg: event.target.value });
    } else {
      //else if one of the pegs on the decoding board was selected
      if (this.state.selectedPeg) {
        //if peg on the right was selected
        this.setState({
          currentGuess: this.state.currentGuess.set(
            event.target.value - 1,
            this.state.selectedPeg
          ),
        });
      }
    }
    console.log("selected: ", this.state.selectedPeg);
    console.log("currentGuess", this.state.currentGuess);
  };
  keyOf(map, valueToFind) {
    for (let [key, value] of map) {
      if (valueToFind === value) {
        return key;
      }
    }

    return -1;
  }
  submitPegs = () => {
    console.log("guess", this.state.code);
    let code = new Map(this.state.code);
    let pegs = this.state.currentGuess;
    let foundKey;
    let exactMatches = 0;
    let valueMatches = 0;
    let score = this.state.score;

    // First pass: Look for value & position matches
    // Safely remove items if they match
    for (let [key, value] of pegs) {
      if (value === code.get(key)) {
        exactMatches++;
        pegs.delete(key);
        code.delete(key);
      }
    }
    if (exactMatches !== 4) {
      this.setState({ score: score - 1 });
    }

    // Second pass: Look for value matches anywhere in the code
    for (let [key, value] of pegs) {
      // attempt to find the peg in the remaining code
      foundKey = this.keyOf(code, value);
      if (foundKey !== -1) {
        valueMatches++;
        // remove the matched code peg, since it's been matched
        code.delete(foundKey);
      }
    }

    if (exactMatches === this.state.pegsInRow) {
      this.setState({ endGame: true });
      this.setState({ success: true });
    } else if (this.state.attempts === this.state.currentRow + 1) {
      this.setState({ endGame: true });
    }

    this.setState({ exactMatches: exactMatches });
    this.setState({ valueMatches: valueMatches });
    this.setState({ currentRow: this.state.currentRow + 1 });
    this.setState({ currentGuess: new Map() });
  };

  toggleRules = () => {
    this.setState({ rules: !this.state.rules });
  };

  showstart = () => {
    this.setState({ start: !this.state.start });
    this.getCode();
  };
  reloadGame = () => {
    this.setState({ success: false });
    this.setState({ endGame: false });
    this.setState({ code: this.getCode() });
    this.setState({ currentRow: 0 });
    this.setState({ currentGuess: new Map() });
    this.setState({ exactMatches: 0 });
    this.setState({ valueMatches: 0 });
    this.setState({ score: 2 });
  };

  render() {
    const className = this.state.start ? "clearfix" : "clearfix hidden";
    return (
      <div style={{ marginTop: "30px" }}>
        <h1>
          <span className="M">M</span>
          <span className="A">A</span>
          <span className="S">S</span>
          <span className="T">T</span>
          <span className="E">E</span>
          <span className="R">R</span>
          <span className="MIND">MIND</span>
        </h1>
        <Rules rules={this.state.rules} toggleRules={this.toggleRules} />
        <Modal_page active={this.showstart} attr={this.state.start} />
        <div className={className}>
          <DecodingBoard
            state={this.state}
            active={this.activatePeg}
            submitPegs={this.submitPegs}
          />
          <CodePegs
            selectedPeg={this.state.selectedPeg}
            colors={this.state.colors}
            active={this.activatePeg}
            start={this.getCode}
          />
        </div>
        <EndGame
          endGame={this.state.endGame}
          success={this.state.success}
          reloadGame={this.reloadGame}
          score={this.state.score}
        />
      </div>
    );
  }
}

export default MasterMindView;
