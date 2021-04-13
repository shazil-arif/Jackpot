import React, { Component } from "react";
import TwoDotsBoard from './components/TwoDotsBoard';
import TwoDotsController from './TwoDotsController';
import TwoDotsModel from "./TwoDotsModel";
import { Button } from "react-bootstrap";

class TwoDotsView extends Component {
	constructor(props) {
		super(props);
		this.twoDotsModel = TwoDotsModel;
		this.twoDotsController = TwoDotsController;
	}
	

	render() {
		return (
			<div>
				<h1>Two Dots</h1>
				<TwoDotsBoard twoDotsModel = {this.twoDotsModel} setCredits={this.props.setCredits} twoDotsController = {this.twoDotsController} ></TwoDotsBoard>
				<div></div>
			</div>
		) 
		
	}
}



export default TwoDotsView;
