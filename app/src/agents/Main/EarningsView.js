import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import CreditInterface from "../../CreditInterface";

export const EarningsView = () => {
	const earnings = CreditInterface.printEarnings();
	return (
		<div>
			<h1 className="mb-2">Earnings Report</h1>
			<div style={{ height: 10 }}></div>
			<Container>
				{earnings.length == 0 ? (
					<Alert variant="danger">
						{" "}
						Please play some games in Jackpot before you check back to see your
						earnings!
					</Alert>
				) : (
					earnings.map((item) => {
						return <Alert variant="primary">{item}</Alert>;
					})
				)}
				<div style={{ height: 50 }}></div>
			</Container>
		</div>
	);
};
