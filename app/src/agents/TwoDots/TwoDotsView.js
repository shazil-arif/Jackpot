import React, { Component } from "react";
import TwoDotsBoard from './components/TwoDotsBoard';
import TwoDotsController from './TwoDotsController';
import TwoDotsModel from "./TwoDotsModel";
import { Button } from "react-bootstrap";

class TwoDotsView extends Component {
	constructor(props) {
		super(props);
		this.twoDotsModel = new TwoDotsModel();
	
	}
	// componentDidMount(){	
		
	// }

	render() {
		return (
			<div>
				<h1>Two Dots</h1>
				<TwoDotsBoard twoDotsModel = {this.twoDotsModel} ></TwoDotsBoard>
				<Button variant="danger">Eliminate selected dots</Button>
				<div></div>
				<Button style={{marginTop: '1%'}} variant="danger">Clear Current Selection</Button>
			</div>
		) 
		
	}
}



export default TwoDotsView;
