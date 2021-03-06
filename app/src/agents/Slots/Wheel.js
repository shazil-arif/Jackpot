import React from "react";
import { Image } from "react-bootstrap";

const Wheel = ({ image }) => (
	<Image src={image} alt={image} height={"256"} data-testid="wheel" />
);

export default Wheel;
