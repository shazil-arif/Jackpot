import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Spinner from "./Spinner";

const MAX_PRIZE = 100;
const CONSEC_PRIZE = 20;
const NON_CONSEC_PRIZE = 10;

export const SlotsView = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [winner, setWinner] = useState(false);
	const [credits, setCredits] = useState(0);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	const handleResult = (wheels) => {
		// Lose
		// Win Lot
		// Win Little
		// Win even less because nonconsecutive
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
			<p>This will update based on rewards!</p>
		</div>
	);
};
