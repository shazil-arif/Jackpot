// this will handle the drawing of dots, canvas, drawing lines
import React from 'react';

class TwoDotsBoard extends React.Component{

    getMouseClickCoordinatesOnBoard(x, y){
        let totalOffsetX = 0;
        let totalOffsetY = 0;
        let canvasX = 0;
        let canvasY = 0;
        let currentElement = this;
    
        do{
            totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
            totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
        }
        while(currentElement = currentElement.offsetParent)
    
        canvasX = x - totalOffsetX;
        canvasY = y - totalOffsetY;
    
        return {x:canvasX, y:canvasY}
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){

    }

    render(){
        return (

        )
    }
    
}