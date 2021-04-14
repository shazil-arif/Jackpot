import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Spinner from "./Spinner";
import uniq from "lodash/uniq";

const MAX_PRIZE = 50;
const CONSEC_PRIZE = 20;
const NON_CONSEC_PRIZE = 10;

export const SlotsView = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [winner, setWinner] = useState("Play a round to get your results!");
	const [credits, setCredits] = useState(0);

	const handleStart = () => {
		setIsRunning(true);
		// Deduct credits
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	const handleResult = (wheels) => {
		const images = wheels.map((wheel) => wheel.split("/").pop());
		console.log(uniq(images));
		const result = uniq(images);
		// Lose
		if (result.length == 3) {
			setWinner("Sorry, you lost!");
			// Update credits
		}
		// Win Lot
		else if (result.length == 1) {
			if (result[0].split(".")[0] == "banana") {
				setWinner("You won the largest prize! Congrats!");
				// Update credits
			} else {
				setWinner("You won a large prize!");
				// Update credits
			}
		}
		// Win Little (2)
		else if (images[0] == images[1] || images[1] == images[2]) {
			setWinner("You won a small prize!");
			// Update credits
		} else {
			// Win even less because nonconsecutive
			setWinner("You won a tiny prize. Not bad.");
			// Update credits
		}
	};
	return (
		<div>
			<p>This is Slots.</p>
			<Spinner spin={isRunning} onStop={handleResult} />
			<br />
			<Button onClick={handleStart} disabled={isRunning}>
				Start
			</Button>
			<Button onClick={handleStop} disabled={!isRunning}>
				Stop
			</Button>
			<p>{winner}</p>
		</div>
	);
};
