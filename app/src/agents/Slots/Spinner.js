import React from "react";
import Wheel from "./Wheel";

import banana from "../../images/fruits/banana.png";
import cherries from "../../images/fruits/cherries.png";
import mango from "../../images/fruits/mango.png";
import pineapple from "../../images/fruits/pineapple.png";
import guava from "../../images/fruits/guava.png";
import dragonfruit from "../../images/fruits/dragon-fruit.png";

class Spinner extends React.Component {
	state = {
		spinning: false,
		wheels: [],
	};

	images = [banana, cherries, mango, pineapple, guava, dragonfruit];

	componentDidMount() {
		this.setState({
			wheels: [this.randomImage(), this.randomImage(), this.randomImage()],
		});
	}

	static getDerivedStateFromProps(props, state) {
		return { spinning: props.spin };
	}

	componentDidUpdate(prevProps, prevState) {
		const { spinning } = this.state;

		if (spinning && spinning !== prevState.spinning) {
			this.tick();
		}

		if (!spinning && spinning !== prevState.spinning) {
			clearInterval(this.isSpinning);
			this.props.onStop(this.state.wheels);
		}
	}

	randomImage = () =>
		this.images[Math.floor(Math.random() * this.images.length)];

	spin = () =>
		this.setState({
			wheels: [this.randomImage(), this.randomImage(), this.randomImage()],
		});

	tick = () => (this.isSpinning = setInterval(this.spin, 100));

	render() {
		const { wheels } = this.state;

		return (
			<React.Fragment>
				{wheels.map((wheel, id) => (
					<Wheel key={`${id}_${wheel}`} image={wheel} />
				))}
			</React.Fragment>
		);
	}
}

export default Spinner;
