// this will handle the drawing of dots, canvas, drawing lines
import React from 'react';
import Point from '../util/Point';
import Dot from '../util/Dot';
import BoardMoves from '../util/DotList';

class TwoDotsBoard extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            wasFirstDotSelected: false,
            lastDotSelected: null,
        };
        this.drawnDotsList = new BoardMoves();
        this.canvasRef = React.createRef();
    }

    getMouseClickCoordinatesOnBoard(x, y){
        let totalOffsetX = 0;
        let totalOffsetY = 0;
        let canvasX = 0;
        let canvasY = 0;
        let currentElement = this.canvasRef.current;
    
        do{
            totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
            totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
        }
        while(currentElement = currentElement.offsetParent)
    
        canvasX = x - totalOffsetX;
        canvasY = y - totalOffsetY;
    
        return new Point(canvasX, canvasY);
    }

    drawDot(dot, color) {
        let point = dot.getPoint();
        let x = point.getX();
        let y = point.getY()
        let radius = dot.getRadius();

        let context = this.canvasRef.current.getContext('2d');

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        context.fill();
    }

    componentDidMount(){
        document.addEventListener("click", (ev) => {
            let pointClickedOnBoard = this.getMouseClickCoordinatesOnBoard(ev.x, ev.y);
            for (const dot of this.drawnDotsList){
                if (dot.isPointWithinDot(pointClickedOnBoard)){
                    if(!this.state.wasFirstDotSelected) {
                        this.setState({ wasFirstDotSelected: true, lastDotSelected: dot});
                    }
                    else{
                        lastDotSelected = this.state.lastDotSelected;
                        this.drawSegment(lastDotSelected, dot);
                    }
                }
            }

		})
        
    }

    /**
     * @param {Point} startingPoint pass point object
     * @param {Point} endingPoint 
     */
    drawSegment(startingPoint, endingPoint){
        let context = this.canvasRef.current.getContext("2d");
        context.beginPath();
		// context.moveTo(20, 20);
		context.lineTo(startingPoint.getX(), startingPoint.getY());
		context.lineTo(endingPoint.getX(), endingPoint.getY());
		context.stroke();
        
    }

    /**
     * 
     * @param {TwoDotsModel} twoDotsModel pass actual board
     */
    drawBoardVisualFromTwoDotsModel(twoDotsModel){
        const dotMargin = 20;
		const numRows = twoDotsModel.getNumRow();
		const numCols = twoDotsModel.getNumCol();

		// constSet the colors you want to support in this array
		// const colors = ['#F03C69', '#FFCD32', '#2BAD5D', '#2ABABF', '#CDDC28', '#B91E8C'];
		
		const canvas = this.canvasRef.current;
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

                let pointToDrawAt = new Point(x,y);
                let dotToDraw = new Dot(pointToDrawAt, dotRadius);

                this.drawnDotsList.add(pointToDrawAt);

                const color = twoDotsModel.get(pointToDrawAt);
				drawDot(dotToDraw, color);
				
			}
			
		}
    }

    render(){
        return (
            
            <div>
				<canvas id="dots" ref={this.canvasRef} style={{
					top: 0,
					left: 0,
					width: '50%',
					height: '50%',
				}}/>
			</div>
        )
    }
    
}

export default TwoDotsBoard;