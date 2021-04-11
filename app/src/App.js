import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MainView from "./agents/Main/MainView";
import { MasterMindView } from "./agents/MasterMind/MasterMindView";
import TwoDotsView from "./agents/TwoDots/TwoDotsView";
import { RussiaRouletteView } from "./agents/RussianRoulette/RussiaRouletteView";
import SudokuView from "./agents/Sudoku/SudokuView";
import { SlotsView } from "./agents/Slots/SlotsView";

function App() {
	return (
		<div className="App">
			<div>
				<Link to="/">Home </Link>
				<Link to="/twodots"> Two Dots </Link>
				<Link to="/mastermind">Mastermind </Link>
				<Link to="/sudoku">Sudoku </Link>
				<Link to="/slots">Slots </Link>
				<Link to="/russianroulette">Russian Roulette </Link>
			</div>
			<Switch>
				<Route exact path="/" component={MainView} />
				<Route exact path="/twodots" component={TwoDotsView} />
				<Route exact path="/mastermind" component={MasterMindView} />
				<Route exact path="/russianroulette" component={RussiaRouletteView} />
				<Route exact path="/sudoku" component={SudokuView} />
				<Route exact path="/slots" component={SlotsView} />
			</Switch>
		</div>
	);
}

export default App;
