// this will handle the drawing of dots, canvas, drawing lines
import React from 'react';
import Point from '../util/Point';
import Dot from '../util/Dot';
import BoardMoves from '../util/DotList';
import { Button, Modal } from 'react-bootstrap';
import CreditInterface from '../../../CreditInterface';
import { Route, Switch, Link } from "react-router-dom";
import MainView from '../../Main/MainView'
class TwoDotsBoard extends React.Component{

    constructor(props) {
        super(props)
    
        
        this.wasFirstDotSelected =  false;
        this.lastDotSelected = null;
        this.path = new BoardMoves();

        this.getBoardCoordinatesFromCanvasCoordinates = {};
        this.drawnDotsList = new BoardMoves();
        this.canvasRef = React.createRef();
        this.spanRef = React.createRef();

        this.updateBoard = this.updateBoard.bind(this);
        this.handler = this.handler.bind(this);

        this.state = { showModal: false };
        if(this.props.twoDotsController.moveCount === -1) this.props.twoDotsController.moveCount = 5;
    }

   

    updateBoard(){
        if(this.path.size() <= 1) {
            alert('No dots selected')
        }
        else{
            this.props.twoDotsModel.updateBoard(this.path);
       
            this.props.twoDotsController.moveCount--;

            if(this.props.twoDotsController.moveCount === 0){
                CreditInterface.addCredits(this.path.size(), 'TwoDots');    
                this.setState({showModal: true});
            }
            else{
                CreditInterface.addCredits(this.path.size(), 'TwoDots');
                this.reset(false);

    
                this.props.setCredits(CreditInterface.getCredits());
                
                this.componentDidMount();
            }
        }

    }

    reset(flag){
        this.wasFirstDotSelected =  false;
        this.lastDotSelected = null;
        this.path = new BoardMoves();

        this.getBoardCoordinatesFromCanvasCoordinates = {};
        this.drawnDotsList = new BoardMoves();
        
        if(flag) {
            this.props.twoDotsController.moveCount = 5;
            this.componentDidMount();
        } 
    }
    getMouseClickCoordinatesOnBoard(x, y){
        let totalOffsetX = 0;
        let totalOffsetY = 0;
        let canvasX = 0;
        let canvasY = 0;
        let currentElement = this.canvasRef.current;
    
        if(currentElement){
            do{
                totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
                totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
            }
            while(currentElement === currentElement.offsetParent)
        
            canvasX = x - totalOffsetX;
            canvasY = y - totalOffsetY;
        
            return new Point(canvasX, canvasY);
        }
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

    componentWillUnmount(){
        document.removeEventListener("click", this.handler);
    }
    componentDidMount(){
        this.drawBoardVisualFromTwoDotsModel(this.props.twoDotsModel);
        document.addEventListener("click", this.handler);
    }

    handler(ev){
        
        let pointClickedOnBoard = this.getMouseClickCoordinatesOnBoard(ev.x, ev.y);
        for (const dot of this.drawnDotsList){
            if (dot.isPointWithinDot(pointClickedOnBoard)){

                if(!this.wasFirstDotSelected){
                    this.wasFirstDotSelected = true;
                    this.lastDotSelected = dot;   

                    let point = this.getBoardCoordinatesFromCanvasCoordinates[dot.getPoint().getX()][dot.getPoint().getY()];
                    this.path.add(point);
                }

                else  {
                    let point = this.getBoardCoordinatesFromCanvasCoordinates[dot.getPoint().getX()][dot.getPoint().getY()];

                    this.path.add(point);
                    if(this.props.twoDotsModel.validateMoves(this.path)){
                        this.drawSegment(this.lastDotSelected.getPoint(), dot.getPoint());
                        this.lastDotSelected = dot;
                    }
                    else {
                        this.path.removeLast();
                    }
                }
            }
        }

		
    }

    /**
     * @param {Point} startingPoint pass point object
     * @param {Point} endingPoint 
     */
    drawSegment(startingPoint, endingPoint){
        let context = this.canvasRef.current.getContext("2d");
        context.lineWidth = 10;
        context.strokeStyle = '#ff0000';
        context.lineCap = 'round';
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

		if(dotWidth > dotHeight) {
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
				// const color = colors[Math.floor(Math.random() * colors.length)];

                // Note that the 2d array board points are different than the actual displayed board points, which are the canvas coordinates
                let pointToDrawAt = new Point(x,y);
                let pointOnTwoDotsBoard = new Point(i,j);
                let dotToDraw = new Dot(pointToDrawAt, dotRadius);

                this.drawnDotsList.add(dotToDraw);

                const color = twoDotsModel.get(pointOnTwoDotsBoard);

                // map center of each circle on canvas's coordinaates to board coordinates

                /**
                 * x : {
                 *  y: new Point()
                 * }
                 * 
                 */
                if(!this.getBoardCoordinatesFromCanvasCoordinates[x]) this.getBoardCoordinatesFromCanvasCoordinates[x] = {};
                this.getBoardCoordinatesFromCanvasCoordinates[x][y] = pointOnTwoDotsBoard;

				this.drawDot(dotToDraw, color);
				
			}
			
		}
    }

    render(){
        let modal;
        if(this.state.showModal){
            modal =  (
                <Modal.Dialog a>
                    <Modal.Header closeButton>
                        <Modal.Title>Game Over! You ran out of moves</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>You Earned {CreditInterface.getCredits()}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button  variant="secondary" onClick={() => {
                            this.reset(true);
                            this.setState({ showModal: false })
                        }}>Play Again</Button>
                       

                        <Link to="/">
                            <Button variant="primary">Exit To Main</Button>    
                        </Link>

                        <Switch>
                            <Route exact path="/" component={MainView} />
			            </Switch>

                    </Modal.Footer>
                </Modal.Dialog>
            )
        }
        else modal = '';

        return (
            
            <div>
                {modal}
				<canvas id="dots" ref={this.canvasRef} style={{
					top: 0,
					left: 0,
					width: '50%',
					height: '50%',
                    border: '1px solid black'
				}}/>
                <div></div>
                <p style={{marginLeft: '0', fontSize: '24px'}} ref={this.spanRef}>Moves Left: {this.props.twoDotsController.moveCount}</p>
                <Button variant="danger" onClick = {this.updateBoard}>Eliminate selected dots</Button>
                {/* {this.state.errorBar} */}
                <div></div>
			</div>
        )
    }
    
}

export default TwoDotsBoard;