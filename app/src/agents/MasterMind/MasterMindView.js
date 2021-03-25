import React, { Component } from "react";
import test from "./MasterMindModel";

export class MasterMindView extends Component {
	render() {
		return (
			<div>
				<h1>This is mastermind.</h1>
				{test()}
			</div>
		);
	}
}

export default MasterMindView;
