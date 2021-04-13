// this will handle the drawing of dots, canvas, drawing lines
import React from "react";
import { Button } from "react-bootstrap";

class SudokuBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardIsValid: true,
      gameStarted: false,
      win: false,
      n: 10,
      initialBoard: [
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
      ],
      currentBoard: [
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
      ],
      solution: [
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
      ],
      currField: "",
    };
  }

  initializeBoard() {
    const possibleBoards = [
      [
        ["", "1", "6", "5", "7", "8", "4", "9", "2"],
        ["5", "2", "9", "1", "3", "4", "7", "6", "8"],
        ["4", "8", "7", "6", "2", "9", "5", "3", "1"],
        ["2", "6", "3", "4", "1", "5", "9", "8", "7"],
        ["9", "7", "4", "8", "6", "3", "1", "2", "5"],
        ["8", "5", "1", "7", "9", "2", "6", "4", "3"],
        ["1", "3", "8", "9", "4", "7", "2", "5", "6"],
        ["6", "9", "2", "3", "5", "1", "8", "7", "4"],
        ["7", "4", "5", "2", "8", "6", "3", "1", "9"],
      ],
    ];
    const i = 0;
    const solutions = [
      [
        ["3", "1", "6", "5", "7", "8", "4", "9", "2"],
        ["5", "2", "9", "1", "3", "4", "7", "6", "8"],
        ["4", "8", "7", "6", "2", "9", "5", "3", "1"],
        ["2", "6", "3", "4", "1", "5", "9", "8", "7"],
        ["9", "7", "4", "8", "6", "3", "1", "2", "5"],
        ["8", "5", "1", "7", "9", "2", "6", "4", "3"],
        ["1", "3", "8", "9", "4", "7", "2", "5", "6"],
        ["6", "9", "2", "3", "5", "1", "8", "7", "4"],
        ["7", "4", "5", "2", "8", "6", "3", "1", "9"],
      ],
    ];
    this.setState({
      initialBoard: JSON.parse(JSON.stringify(possibleBoards[i])),
      currentBoard: JSON.parse(JSON.stringify(possibleBoards[i])),
      solution: solutions[i],
      gameStarted: true,
      win: false,
    });
  }

  resetBoard() {
    this.setState({
      currentBoard: JSON.parse(JSON.stringify(this.state.initialBoard)),
    });
  }

  validateBoard() {
    let rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    let cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    let boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let val = this.state.currentBoard[i][j];
        if (
          val == ""
        ) {
          return false;
        }
      }
    }
    return true;
  }

  checkWin() {
    return (
      JSON.stringify(this.state.currentBoard) ==
      JSON.stringify(this.state.solution)
    );
  }

  checkBoard() {
    if (this.validateBoard()) {
      this.setState({
        boardIsValid: true,
      });
      if (this.checkWin()) {
        this.setState({
          win: true,
          gameStarted: false,
        });
      } else {
        this.setState({
          n: this.state.n - 1,
        });
      }
    } else {
      this.setState({
        boardIsValid: false,
      });
    }
  }

  _handleCellChange(e, y, x) {
    let newBoard = this.state.currentBoard;
    newBoard[y][x] = e;
    this.setState({
      currentBoard: newBoard,
      currField: "Y:" + y + " X:" + x + " VALUE:" + e,
    });
  }

  createTable = () => {
    let table = [];

    for (let i = 1; i <= 9; i++) {
      let children = [];

      for (let j = 1; j <= 9; j++) {
        let style = {
          "text-align": "center",
          width: "30px",
          border: "1px solid black",
        };
        if (i == 3 || i == 6) {
          style = { ...style, "border-bottom": "1px solid blue" };
        }
        if (i == 4 || i == 7) {
          style = { ...style, "border-top": "1px solid blue" };
        }
        if (j == 3 || j == 6) {
          style = { ...style, "border-right": "1px solid blue" };
        }
        if (j == 4 || j == 7) {
          style = { ...style, "border-left": "1px solid blue" };
        }
        children.push(
          <td>
            <input
              defaultValue={this.state.initialBoard[i - 1][j - 1]}
              disabled={
                this.state.initialBoard[i - 1][j - 1] != "" || this.state.win
              }
              type="text"
              style={style}
              onChange={(e) =>
                this._handleCellChange(e.target.value, i - 1, j - 1)
              }
              value={this.state.currentBoard[i - 1][j - 1]}
            />
          </td>
        );
      }

      table.push(<tr>{children}</tr>);
    }
    return table;
  };

  render() {
    return (
      <div>
        <table style={{ "margin-left": "auto", "margin-right": "auto" }}>
          {this.createTable()}
        </table>
        <br />
        <Button
          variant="success"
          onClick={(e) => this.checkBoard(e)}
          style={{ margin: "2px" }}
          disabled={!this.state.gameStarted}
        >
          Submit Board
        </Button>
        <Button
          variant="info"
          onClick={(e) => this.initializeBoard(e)}
          style={{ margin: "2px" }}
          disabled={this.state.gameStarted}
        >
          {this.state.win ? "New Game" : "Start Game"}
        </Button>
        <Button
          variant="warning"
          onClick={(e) => this.resetBoard(e)}
          style={{ margin: "2px" }}
          disabled={!this.state.gameStarted}
        >
          Reset
        </Button>
        <br />
        <div>
          <Button
            variant="outline-dark"
            style={{ margin: "2px" }}
            disabled={true}
          >
            Tries left: {Math.max(this.state.n, 0)}
          </Button>
        </div>
        <div>
          <Button
            variant="outline-dark"
            style={{ margin: "2px" }}
            disabled={true}
          >
            Current score for winning: {Math.max(this.state.n * 1000, 0)}
          </Button>
        </div>

        {!this.state.boardIsValid && (
          <div>
            <Button variant="danger" style={{ margin: "2px" }} disabled={true}>
              Board is invalid!
            </Button>
          </div>
        )}
        {this.state.win && (
          <div>
            <Button
              variant="secondary"
              style={{ margin: "2px" }}
              disabled={true}
            >
              Win!
            </Button>
          </div>
        )}
        <h2 style={{ "font-size": "25px" }}>Instructions:</h2>
        <p>
          Fill in the empty squares such that:
          <ol>
            <li>1. Each row must contain the digits 1-9 without repetition.</li>
            <li>
              2. Each column must contain the digits 1-9 without repetition.
            </li>
            <li>
              3. Each of the nine 3x3 sub-boxes of the grid must contain the
              digits 1-9 without repetition.
            </li>
          </ol>
        </p>
        Field: {this.state.currField}
      </div>
    );
  }
}

export default SudokuBoard;
