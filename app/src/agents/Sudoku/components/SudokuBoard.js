// this will handle the drawing of dots, canvas, drawing lines
import React from "react";
import { Button } from "react-bootstrap";

class SudokuBoard extends React.Component {
  constructor(props) {
    super(props);
    this.board = this.props.SudokuModel.board;
    this.boardIsValid = true;
    this.n = 6;
    this.board = [
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
    ];
    this.currentBoard = [
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
    ];
    this._initializeRandomBoard();
  }

  _initializeRandomBoard() {
    const possibleBoards = [
      [
        ["1", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
      ],
      [
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
    ];
    this.board = possibleBoards[0];
    this.currentBoard = this.board;
  }

  validateBoard(currentBoard) {}

  updateBoard(currentBoard) {}

  updateBoard() {
    
  }

  render() {
    return (
      <div>
        {this.board}
        <table style={{ "margin-left": "auto", "margin-right": "auto" }}>
          <tr>
            <th>
              <input
                defaultValue={this.board[0][0]}
                disabled={this.board[0][0] != ""}
                type="text"
                id="1"
                style={{ "text-align": "center", width: "30px" }}
              />
            </th>
          </tr>
        </table>
        <br />
        <Button variant="danger" onClick={this.updateBoard}>
          Validate Board
        </Button>

        {!this.boardIsValid && <div>board invalid</div>}
      </div>
    );
  }
}

export default SudokuBoard;
