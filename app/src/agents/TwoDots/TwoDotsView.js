import React, { Component } from "react";

class TwoDotsView extends Component {
	constructor(props) {
		super(props)
	
		this.canvasRef = React.createRef();
	}
	
	componentDidMount(){			
		const dotMargin = 20;
		const numRows = 6;
		const numCols = 6;
		// constSet the colors you want to support in this array
		const colors = ['#F03C69', '#FFCD32', '#2BAD5D', '#2ABABF', '#CDDC28', '#B91E8C'];
		
		const canvas = this.canvasRef.current;
		const context = canvas.getContext('2d');
		const canvasWidth = canvas.clientWidth;
		const canvasHeight = canvas.clientHeight; // this one is new
		canvas.setAttribute("height", canvasHeight);		
		canvas.setAttribute("width", canvasWidth);

		var dotWidth = ((canvasWidth - (2 * dotMargin)) / numCols) - dotMargin;
		var dotHeight = ((canvasHeight - (2 * dotMargin)) / numRows) - dotMargin;
		
		if( dotWidth > dotHeight ) {
			var dotDiameter = dotHeight;
			var xMargin = (canvasWidth - ((2 * dotMargin) + (numCols * dotDiameter))) / numCols;
			var yMargin = dotMargin;
		} else {
			var dotDiameter = dotWidth;
			var xMargin = dotMargin;
			var yMargin = (canvasHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
		}
		
		console.log(dotDiameter)
		const dotRadius = dotDiameter * 0.5;
		
		for(var i = 0; i < numRows; i++) {
			for(var j = 0; j < numCols; j++) {
			const x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
			const y = (i * (dotDiameter + yMargin)) + dotMargin + (yMargin / 2) + dotRadius;
			// Grab a random color from the array.
			const color = colors[Math.floor(Math.random() * colors.length)];
			drawDot(x, y, dotRadius, color);
			}
		}
		
		function drawDot(x, y, radius, color) {
			context.beginPath();
			context.arc(x, y, radius, 0, 2 * Math.PI, false);
			context.fillStyle = color;
			context.fill();
		}
	}

	render() {
		return (
			<div>
				<h1>This is twodots.</h1>
				<canvas ref={this.canvasRef} style={{
					top: 0,
					left: 0,
					width: '50%',
					height: '50%',
				}}/>
			</div>
		);
	}
}



export default TwoDotsView;
