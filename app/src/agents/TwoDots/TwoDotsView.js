import React, { Component } from "react";
let cnt = 0;


function relMouseCoords(x, y){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = x - totalOffsetX;
    canvasY = y - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

class TwoDotsView extends Component {
	constructor(props) {
		super(props)
		
		this.points = [];
		this.canvasRef = React.createRef();
	}

	isCursorWithinCircle(mouseX, mouseY) {
	
		let newCoords = this.canvasRef.current.relMouseCoords(mouseX, mouseY);
		let newX = newCoords.x;
		let newY = newCoords.y;

		mouseX = newX;
		mouseY = newY;

		

		for(const point of this.points){
			let x = point[0];
			let y = point[1];
			let r = point[2]; // use point class for this

		
			let sqrt = (x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY)
			let distSqr = Math.sqrt(sqrt);

			if(distSqr <= r) return true;
		}
		return false;
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

		let dotWidth = ((canvasWidth - (2 * dotMargin)) / numCols) - dotMargin;
		let dotHeight = ((canvasHeight - (2 * dotMargin)) / numRows) - dotMargin;
		let dotDiameter;
		let xMargin;
		let yMargin;

		if( dotWidth > dotHeight ) {
			dotDiameter = dotHeight;
			xMargin = (canvasWidth - ((2 * dotMargin) + (numCols * dotDiameter))) / numCols;
			yMargin = dotMargin;
		} else{
			dotDiameter = dotWidth;
			xMargin = dotMargin;
			yMargin = (canvasHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
		}
		
		const dotRadius = dotDiameter * 0.5;
		for(let i = 0; i < numRows; i++) {
			for(let j = 0; j < numCols; j++) {
				const x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
				const y = (i * (dotDiameter + yMargin)) + dotMargin + (yMargin / 2) + dotRadius;
				// Grab a random color from the array.
				const color = colors[Math.floor(Math.random() * colors.length)];
				this.points.push([x,y, dotRadius]);
				console.log(x,y,dotRadius)
				drawDot(x, y, dotRadius, color);
				
			}
			
		}

		
		document.addEventListener("click", (ev) => {
			if(this.isCursorWithinCircle(ev.x, ev.y)) {
				drawDot(this.points[0][0], this.points[0][1], dotRadius/10, 'black');

				if(cnt == 0){
					context.beginPath();
					// context.moveTo(20, 20);
					context.lineTo(this.points[0][0], this.points[0][1]);
					context.lineTo(this.points[1][0], this.points[1][1]);
					context.stroke();
					cnt++
				}
				else{
					context.beginPath();
					// context.moveTo(20, 20);
					context.lineTo(this.points[1][0], this.points[1][1]);
					context.lineTo(this.points[7][0], this.points[7][1]);
					context.stroke();
					cnt++
				}
				
			}
		})
		
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
				<h1>TwoDots</h1>
				<canvas id="dots" ref={this.canvasRef} style={{
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
