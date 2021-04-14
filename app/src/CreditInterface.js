import React, { useEffect } from "react";
class CreditInterface {
	constructor() {
		this.credits = localStorage.getItem("credits") || 100;
		this.history = [];
	}

	getCredits() {
		return this.credits;
	}
	addCredits(credits, game) {
		this.credits += credits;
		this.history.push({ credits: credits, game: game });
	}

	removeCredits(credits, game) {
		this.credits -= credits;
		this.history.push({ credits: credits, game: game });
	}

	cashOut() {}

	generateReport = (arr) => {
		let report = [];
		arr.map((item) => {
			let credits = item.credits;
			let game = item.game;
			report.push(
				`You ${credits >= 0 ? "won" : "lost"} ${credits} in ${game}.`
			);
		});
		return report;
	};
	getEarningsHistory() {
		let storedEarnings = localStorage.getItem("creditReport");
		let earnings = storedEarnings
			.split("\n")
			.slice(0, -1)
			.map((item) => {
				return JSON.parse(item);
			});
		return this.generateReport(earnings);
	}

	saveCreditsLocally() {
		let string = localStorage.getItem("creditReport");
		this.history.forEach((item) => {
			string += JSON.stringify(item) + "\n";
		});
		localStorage.setItem("creditReport", string);
		localStorage.setItem("credits", this.credits);
	}

	printEarnings() {
		return this.generateReport(this.history);
	}

	resetCredits() {
		this.credits = 0;
	}
}

export default new CreditInterface();
