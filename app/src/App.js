import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MainView from "./agents/Main/MainView";
import { MasterMindView } from "./agents/MasterMind/MasterMindView";
import TwoDotsView from "./agents/TwoDots/TwoDotsView";
import { RussianRouletteView } from "./agents/RussianRoulette/RussianRouletteView";
import SudokuView from "./agents/Sudoku/SudokuView";
import { SlotsView } from "./agents/Slots/SlotsView";
import { EarningsView } from "./agents/Main/EarningsView";
import CreditInterface from "./CreditInterface";
import { Nav, Navbar, Container, Button, Card } from "react-bootstrap";
import { useState } from "react";
import React from "react";

function App() {
<<<<<<< HEAD
  const [credits, setCredits] = useState(CreditInterface.getCredits());
  let oc = () => {
    CreditInterface.addCredits(10, "Home");
    setCredits(CreditInterface.getCredits());
  };
=======
	// const _credits = useContext(CreditContext);

	const [credits, setCredits] = useState(CreditInterface.getCredits());
	let oc = () => {
		CreditInterface.addCredits(10, "Home");
		setCredits(CreditInterface.getCredits());
	};
>>>>>>> 68e2c86ce3dbe801354524cafb3c19298d3e5b5b

  let oc2 = () => {
    console.log(CreditInterface.printEarnings());
  };

  let oc3 = () => {
    console.log(CreditInterface.getCredits());
  };

<<<<<<< HEAD
  function Wrapper(Component) {
    return function () {
      return <Component setCredits={setCredits}></Component>;
    };
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
        <Route exact path="/twodots" component={Wrapper(TwoDotsView)} />
        <Route exact path="/mastermind" component={Wrapper(MasterMindView)} />
        <Route exact path="/russianroulette" component={RussiaRouletteView} />
        <Route exact path="/sudoku" component={SudokuView} />
        <Route exact path="/slots" component={SlotsView} />
      </Switch>
      <p>Current Credits: {credits}</p>
    </div>
  );
=======
	function Wrapper(Component) {
		return function () {
			return <Component setCredits={setCredits}></Component>;
		};
	}

	return (
		<div className="App">
			<Navbar className="mb-3" bg="light" expand="lg">
				<Link to="/">
					<Navbar.Brand>Jackpot</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/sudoku">
							<Button className="mx-2 my-1" variant="success">
								Sudoku
							</Button>
						</Link>
						<Link to="/slots">
							<Button className="mx-2 my-1" variant="success">
								Slots
							</Button>
						</Link>
						<Link to="/twodots">
							<Button className="mx-2 my-1" variant="success">
								Two Dots
							</Button>
						</Link>
						<Link to="/mastermind">
							<Button className="mx-2 my-1" variant="success">
								Mastermind
							</Button>
						</Link>
						<Link to="/russianroulette">
							<Button className="mx-2 my-1" variant="success">
								Russian Roulette
							</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
				{/* <Button onClick={oc}>Add </Button>
				<Button onClick={oc2}>Print </Button> */}
				<Link to="/earnings">
					<Button onClick={oc3}>Print Earnings </Button>
				</Link>
			</Navbar>
			<Switch>
				<Route exact path="/" component={MainView} />
				<Route exact path="/twodots" component={Wrapper(TwoDotsView)} />
				<Route exact path="/mastermind" component={Wrapper(MasterMindView)} />
				<Route exact path="/sudoku" component={Wrapper(SudokuView)} />
				<Route exact path="/slots" component={Wrapper(SlotsView)} />
				<Route exact path="/earnings" component={Wrapper(EarningsView)} />
			</Switch>
			<Container>
				<Navbar bg="dark" fixed="bottom">
					<p className="m-auto" style={{ color: "white", fontSize: "2em" }}>
						Current Credits: {credits}
					</p>
				</Navbar>
			</Container>
		</div>
	);
>>>>>>> 68e2c86ce3dbe801354524cafb3c19298d3e5b5b
}

export default App;
