import React, { Component } from "react";
import CardView from "../../components/CardView";

export class MainView extends Component {
	render() {
		return (
			<div>
				<h1 style={{ marginBottom: "2%" }}>Welcome to Jackpot!</h1>
				<CardView setCredits={this.props.setCredits}></CardView>
			</div>
		);
	}
}

export default MainView;
