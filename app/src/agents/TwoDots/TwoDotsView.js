import React, { Component } from "react";
import TwoDotsBoard from './components/TwoDotsBoard';
import TwoDotsController from './TwoDotsController';
import TwoDotsModel from "./TwoDotsModel";

class TwoDotsView extends Component {
	constructor(props) {
		super(props);
		this.twoDotsModel = new TwoDotsModel();
	
	}
	// componentDidMount(){	
		
	// }

	render() {
		return <TwoDotsBoard twoDotsModel = {this.twoDotsModel} ></TwoDotsBoard>
		
	}
}



export default TwoDotsView;
