import React, { Component } from "react";
import SudokuController from './SudokuController';
import SudokuModel from "./SudokuModel";
import SudokuBoard from './components/SudokuBoard';

class SudokuView extends Component {
	constructor(props) {
		super(props);
		// this.SudokuModel = new SudokuModel();
	
	}
	

	render() {
		return (
			<div>
				<h1>Sudoku</h1>
				{/* <SudokuBoard SudokuModel = {this.SudokuModel} updateClick ></SudokuBoard> */}
				<SudokuBoard />
			</div>
		) 
		
	}
}

export default SudokuView;