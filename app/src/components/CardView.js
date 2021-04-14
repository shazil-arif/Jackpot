import React, { Component } from "react";
import { CardColumns, Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CreditInterface from "../CreditInterface";

class CardView extends Component {
	render() {
		let handleExit = () => {
			if (window.confirm("Are you sure you want to exit Jackpot?")) {
				CreditInterface.saveCreditsLocally();
				window.location.replace("http://www.google.com");
			} else {
				alert(
					"We see you have not left. Don't stay too long, you might go broke!"
				);
			}
		};
		return (
			<Container>
				<CardColumns>
					<Card>
						<Card.Img
							variant="top"
							src="https://thumbs-prod.si-cdn.com/VC2deYXdTFZI_hT79qwW41RUDds=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/36/9d/369ddaba-c53c-4a17-abee-5d24c79c9bf4/sudoku-image.png"
							height="250px"
							width="250px"
						/>
						<Card.Body>
							<Card.Title>Sudoku</Card.Title>
							<Card.Text>
								Are you a math prodigy? Enjoy the time of your life playing
								Victor's Sudoku.
								<div style={{ marginTop: "5%" }}>
									<Link to="/sudoku">
										<Button variant="primary">Play Now!</Button>{" "}
									</Link>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://scx1.b-cdn.net/csz/news/800a/2019/themastermin.jpg"
							height="250px"
							width="250px"
						/>
						<Card.Body>
							<Card.Title>MasterMind</Card.Title>
							<Card.Text>
								Enjoy Gary's in-house game created from scratch. Made in China.
								<div style={{ marginTop: "5%" }}>
									<Link to="/mastermind">
										<Button variant="primary">Play Now!</Button>{" "}
									</Link>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="http://www.techpublishnow.com/wp-content/uploads/2020/04/Start-the-year-with-some-exciting-slots.jpg"
							height="250px"
							width="250px"
						/>
						<Card.Body>
							<Card.Title>Slots</Card.Title>
							<Card.Text>
								Like to bet your odds on a coin flip? Me Neither. Enjoy Maanav's
								PM style project negotiation.
								<div style={{ marginTop: "5%" }}>
									<Link to="/slots">
										<Button variant="primary">Play Now!</Button>{" "}
									</Link>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://image.winudf.com/v2/image1/Y29tLmNpYmVyZHJvaXgucnVzc2lhbnJvdWxldHRlX3NjcmVlbl8wXzE1NTAwNTQ4NDRfMDcz/screen-0.jpg?fakeurl=1&type=.jpg"
							height="250px"
							width="250px"
						/>
						<Card.Body>
							<Card.Title>Russian Roulette</Card.Title>
							<Card.Text>
								Don't ask, just play. <br />
								Otherwise, Wenzhi will shoot you.
								<div style={{ marginTop: "5%" }}>
									<Link to="/russianroulette">
										<Button variant="primary">Play Now!</Button>{" "}
									</Link>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://dots.helpshift.com/improxy?url=https%3A%2F%2Fis5-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple124%2Fv4%2F01%2Fbb%2Ff3%2F01bbf384-d21f-bb75-1fa5-aca163fd8140%2Fsource%2F512x512bb.jpg&kot=8coIf9lwQiKyHu%2FNhaKtrn%2F2qJMaI8FuF0CUSVL4IwA%3D&size=200x200"
							height="250px"
							width="250px"
						/>
						<Card.Body>
							<Card.Title>TwoDots</Card.Title>
							<Card.Text>
								Like drawing random lines without much thought? Shazil agrees
								with you.
								<div style={{ marginTop: "5%" }}>
									<Link to="/twodots">
										<Button variant="primary">Play Now!</Button>{" "}
									</Link>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Cash out.</Card.Title>
							<Card.Text>
								Hit the Jackpot and want to go home with your winnings? You have
								come to the right place.
								<div style={{ marginTop: "5%" }}>
									<Link to="/earnings">
										<Button variant="primary">Print Earnings</Button>
									</Link>
								</div>
								<div style={{ marginTop: "5%" }}>
									<Button variant="primary" onClick={handleExit}>
										Exit Game
									</Button>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Reset Credits</Card.Title>
							<Card.Text>
								Gone broke and want a chance at redemption? Reset your credits,
								free of charge!
								<div style={{ marginTop: "5%" }}>
									<Button variant="primary">Reset Credits</Button>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
				</CardColumns>
			</Container>
		);
	}
}

export default CardView;
