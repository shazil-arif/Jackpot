// this will handle the drawing of dots, canvas, drawing lines
import React from "react";
import { Button } from "react-bootstrap";
import CreditInterface from "../../../CreditInterface";

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
      currField: "",
      iter: 0,
    };
    this.checkWin = this.checkWin.bind(this);
  }

  deductPoints() {
    CreditInterface.addCredits(-10, "Sudoku");
    this.props.setCredits(CreditInterface.getCredits());
    return;
  }

  setStateSynchronous(stateUpdate) {
    return new Promise(resolve => {
        this.setState(stateUpdate, () => resolve());
    });
  }

  initializeBoard() {

    const credits = CreditInterface.getCredits();
		if (credits < 10) {
			alert(
				"Sorry! You do not have enough credits to play. Reset your credits in the home screen."
			);
      return;
		}
    const possibleBoards = [
      //3, 5
      //2, 4
      //7, 9, 3
      //3, 1, 5
      //9, 4, 5
      //8, 9
      //3, 8
      //1, 7
      //7, 2
      [
        ["", "1", "6", "", "7", "8", "4", "9", "2"],
        ["5", "", "9", "1", "3", "", "7", "6", "8"],
        ["4", "8", "", "6", "2", "", "5", "", "1"],
        ["2", "6", "", "4", "", "", "9", "8", "7"],
        ["", "7", "", "8", "6", "3", "1", "2", ""],
        ["", "5", "1", "7", "", "2", "6", "4", "3"],
        ["1", "", "", "9", "4", "7", "2", "5", "6"],
        ["6", "9", "2", "3", "5", "", "8", "", "4"],
        ["", "4", "5", "", "8", "6", "3", "1", "9"],
      ],
      [
        ["3", "5", "4", "2", "9", "8", "1", "6", "7"], 
        ["1", "2", "8", "6", "7", "5", "3", "9", "4"], 
        ["6", "9", "7", "3", "4", "1", "8", "2", "5"], 
        ["5", "1", "6", "4", "8", "7", "9", "3", "2"], 
        ["7", "3", "2", "1", "6", "9", "4", "5", "8"], 
        ["8", "4", "9", "5", "3", "2", "7", "1", "6"], 
        ["4", "7", "5", "9", "1", "6", "2", "8", "3"], 
        ["9", "6", "3", "8", "2", "4", "5", "7", "1"], 
        ["", "8", "1", "7", "5", "3", "6", "4", "9"]
      ]
    ];
    const i = this.state.iter;

    this.setState({
      initialBoard: JSON.parse(JSON.stringify(possibleBoards[i])),
      currentBoard: JSON.parse(JSON.stringify(possibleBoards[i])),
      gameStarted: true,
      win: false,
      n: 10,
      iter: (i+1)%(possibleBoards.length)
    });
    // this.deductPoints();
    // this.setState(currentState => {
    //   currentState.initialBoard = JSON.parse(JSON.stringify(possibleBoards[i]));
    //   currentState.currentBoard = JSON.parse(JSON.stringify(possibleBoards[i]));
    //   currentState.gameStarted = true;
    //   currentState.win = false;
    //   currentState.n = 10;
    //   currentState.iter = (i+1)%(possibleBoards.length);
    //   return currentState;
    // });    
  }

  resetBoard() {
    this.setState({
      currentBoard: JSON.parse(JSON.stringify(this.state.initialBoard)),
    });
  }

  validateBoard() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let val = this.state.currentBoard[i][j];
        if (
          val != "1" &&
          val != "2" &&
          val != "3" &&
          val != "4" &&
          val != "5" &&
          val != "6" &&
          val != "7" &&
          val != "8" &&
          val != "9"
        ) {
          return false;
        }
        }
      }
    
    return true;
  }

  checkWin() {
    let rows = [];
    let cols = [];
    let boxes = [];
    for (let i = 0; i < 9; i++) {
      rows.push({"1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0});
      cols.push({"1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0});
      boxes.push({"1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0});
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let val = this.state.currentBoard[i][j];
        let k = Math.floor((i/3))*3 + Math.floor(j/3);
        rows[i][val] = rows[i][val] + 1;
        cols[j][val] = cols[j][val] + 1;
        boxes[k][val] = boxes[k][val] + 1;

        if (rows[i][val] > 1 || cols[j][val] > 1 || boxes[k][val] > 1){
          return false;
        }
      }
    }
    return true;
  
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
        // CreditInterface.addCredits(this.state.n*1.5, "Sudoku");
        // this.props.setCredits(CreditInterface.getCredits());
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
      currentBoard: newBoard
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
        if (this.state.initialBoard[i - 1][j - 1] != "" || this.state.win) {
          style = {...style, "background": "#dddddd"};
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
            Current score for winning: {Math.max(this.state.n * 1.5, 0)}
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
          You have 10 tries each game.
          
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
