import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MainView from "./agents/Main/MainView";
import { MasterMindView } from "./agents/MasterMind/MasterMindView";
import TwoDotsView from "./agents/TwoDots/TwoDotsView";
import { RussiaRouletteView } from "./agents/RussianRoulette/RussiaRouletteView";
import SudokuView from "./agents/Sudoku/SudokuView";
import { SlotsView } from "./agents/Slots/SlotsView";
import CreditInterface from "./CreditInterface";
import { Button } from "react-bootstrap";
import { useState } from "react";
import React from 'react'

function App() {
	// const _credits = useContext(CreditContext);

	const [credits, setCredits] = useState(CreditInterface.getCredits());
	let oc = () => {
		CreditInterface.addCredits(10, "Home");
		setCredits(CreditInterface.getCredits())
	};

	let oc2 = () => {
		console.log(CreditInterface.printEarnings());
	};

	let oc3 = () => {
		console.log(CreditInterface.getCredits());
	};

	
	function Wrapper(Component){
		return function(){
			return (
				<Component setCredits={setCredits}></Component>
			)
		}
	}
	

	return (
		<div className="App">
			<div>
				<Link to="/">Home </Link>
				<Link to="/twodots"> Two Dots </Link>
				<Link to="/mastermind">Mastermind </Link>
				<Link to="/sudoku">Sudoku </Link>
				<Link to="/slots">Slots </Link>
				<Link to="/russianroulette">Russian Roulette </Link>
				<button onClick={oc}>Add </button>
				<button onClick={oc2}>Print </button>
				<button onClick={oc3}>Update </button>
			</div>
			<Switch>
				<Route exact path="/" component={MainView} />
				<Route exact path="/twodots" component= {Wrapper(TwoDotsView)}/>
				<Route exact path="/mastermind" component={Wrapper(MasterMindView)} />
				<Route exact path="/russianroulette" component={RussiaRouletteView} />
				<Route exact path="/sudoku" component={SudokuView} />
				<Route exact path="/slots" component={SlotsView} />
			</Switch>
			<p>Current Credits: { credits }</p>
		</div>
	);
}

export default App;
