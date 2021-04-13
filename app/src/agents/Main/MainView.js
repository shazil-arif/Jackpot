import React, { Component } from "react";
import CardView from '../../components/CardView';

export class MainView extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to Jackpot</h1>
				<CardView></CardView>
			</div>
		);
	}
}

export default MainView;
