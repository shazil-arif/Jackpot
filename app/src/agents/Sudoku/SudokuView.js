import React, { Component } from "react";
import SudokuController from './SudokuController';
import SudokuModel from "./SudokuModel";
import SudokuBoard from './components/SudokuBoard';

class SudokuView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Sudoku</h1>
				<SudokuBoard setCredits={this.props.setCredits} />
			</div>
		) 
		
	}
}

export default SudokuView;