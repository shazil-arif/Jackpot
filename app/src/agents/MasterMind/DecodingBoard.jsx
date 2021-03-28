import React, { Component } from 'react';
class DecodingBoard extends Component {
    state = {
        rows:[],

    }

    render() { 
        return (  );
    }
}


class Pegs extends Component {
    render() { 
        return ( <span className={this.props.pegClass}>
            <input type='radio' name={this.props.name} value={this.props.value} id={this.props.idVal} onClick={this.props.isCurrentRow ? this.props.activatePeg : null}/>
            <label htmlFor={this.props.idVal}></label>
        </span> );
    }
}
 

class codePegs extends Component {
    generatechoice(){
        const pegs =[];
        let id;
        let pegClass;

        for(let[key,value] of this.props.colors)

    }
    render() { 
        return (  );
    }
}
 
export default codePegs;

    export default Pegs;

 