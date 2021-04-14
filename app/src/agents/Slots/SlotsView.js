import React, { useState } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import Spinner from "./Spinner";
import uniq from "lodash/uniq";
import CreditInterface from "../../CreditInterface";

const MAX_PRIZE = 50;
const CONSEC_PRIZE = 20;
const NON_CONSEC_PRIZE = 10;

export const SlotsView = (props) => {
	const [isRunning, setIsRunning] = useState(false);
	const [winner, setWinner] = useState("Play a round to get your results!");
	const [credits, setCredits] = useState(0);
	props.setCredits(CreditInterface.getCredits());
	const handleStart = () => {
		const credits = CreditInterface.getCredits();
		if (credits >= 10) {
			setIsRunning(true);
		} else {
			alert(
				"Sorry! You do not have enough credits to play. Reset your credits in the home screen."
			);
		}
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	const handleResult = (wheels) => {
		const images = wheels.map((wheel) => wheel.split("/").pop());
		const result = uniq(images);
		// Lose
		if (result.length == 3) {
			CreditInterface.removeCredits(10, "Slots");
			setWinner("Sorry, you lost!");
		}
		// Win Lot
		else if (result.length == 1) {
			if (result[0].split(".")[0] == "banana") {
				CreditInterface.addCredits(MAX_PRIZE * 2, "Slots");
				setWinner("You won the largest prize! Congrats!");
			} else {
				CreditInterface.addCredits(MAX_PRIZE, "Slots");
				setWinner("You won a large prize!");
			}
		}
		// Win Little (2)
		else if (images[0] == images[1] || images[1] == images[2]) {
			CreditInterface.addCredits(20, "Slots");
			setWinner("You won a small prize!");
		} else {
			CreditInterface.addCredits(10, "Slots");
			setWinner("You won a tiny prize. Not bad.");
		}
		props.setCredits(CreditInterface.getCredits());
	};
	return (
		<div>
			<h1>Welcome to Slots. </h1>
			<div style={{ height: 100 }}></div>
			<Spinner spin={isRunning} onStop={handleResult} />
			<div style={{ height: 100 }}></div>
			<div className="mb-2">
				<Button
					variant="outline-success"
					size="lg"
					onClick={handleStart}
					disabled={isRunning}
				>
					{isRunning ? "🌟 Spinning 🌟" : " Start Spinning ☸"}
				</Button>{" "}
				<Button
					variant="outline-danger"
					size="lg"
					onClick={handleStop}
					disabled={!isRunning}
				>
					Stop Spinning
				</Button>
			</div>
			<p>{winner}</p>

			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="1">
						Instructions
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<h2 size="large">
								Unlike other games, slots is really straightforward!
							</h2>
							<p>
								To play, just press the start spinning button, and stop when
								you're feeling lucky! Rewards are paid out depending on your
								result.
							</p>
							<p>Payouts are as follows:</p>
							<ul>
								<li>
									<b>Three Bananas: {MAX_PRIZE * 2}</b>
								</li>
								<li>Three in a row: {MAX_PRIZE}</li>
								<li>Two consecutive symbols: {CONSEC_PRIZE}</li>
								<li>Two nonconsecutive symbols: {NON_CONSEC_PRIZE}</li>
							</ul>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};
