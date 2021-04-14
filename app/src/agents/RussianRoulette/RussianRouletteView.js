import React, { Component } from "react";
import { Button } from "react-bootstrap";

import picEmpty_s from './Empty_s.png';
import picEmpty from './Empty.png';
import picFail from './Fail.png';
import picLoaded from './Loaded.png';
import picLoaded_s from './Loaded_s.png';

import RussianRouletteModel from "./RussianRouletteModel";
import CreditInterface from '../../CreditInterface';

export class RussianRouletteView extends Component {
	constructor(props) {
		super(props);
		this.RussianRouletteModel = new RussianRouletteModel();
		//Model
		
		this.state = {
			flipRender: true,
			gameStage:"unloaded",//unloaded, loaded, fail, win 
			gunCylinder:[0,0,0,0,0,0],
			gunIndex:0,
			nLoad:0,
			countFire:0,
			multiplierGained:1

			,disableLoad:false,disableFire:true,disableSpin:true

			,gameMSG:""
		  };
		  this.statef={}

		  this.fire = this.fire.bind(this);
		  this.load = this.load.bind(this);
		  this.spin1 = this.spin1.bind(this);
		  this.spinR = this.spinR.bind(this);
		  this.quit = this.quit.bind(this);

	}

	fire(){
		if(this.state.gunCylinder[this.state.gunIndex]==1)
		{
			this.state.gunCylinder[this.state.gunIndex]=0
			this.state.nLoad--
			this.state.gameStage="fail"
			this.state.gameMSG="Bang! The coconut is dead"
			this.state.disableFire=true;
			this.spin1()
		}else
		{
			this.state.multiplierGained=6/(6-this.state.nLoad-this.state.countFire);
			this.state.countFire++;
			this.spin1()
			this.state.gameMSG="You pulled the trigger\n\n... "+this.state.countFire+" round(s) survived, current multiplier = " + this.state.multiplierGained
			if(this.state.countFire===6-this.state.nLoad){
				this.state.gameStage="win"
				this.state.disableFire=true;
				this.state.multiplierGained*=1.5;
				this.state.gameMSG="You were lucky enough to survive through the "+(6-this.state.nLoad)+" empty chamber(s). You know the next chamber is loaded, but you already won"
		}
		}
		this.setState({ statef: this.statef })
	}
	load()
	{	
		
		this.state.disableSpin=false;
		this.state.gunCylinder[this.state.gunIndex]=1;
		this.state.nLoad++;
		this.setState({ statef: this.statef });
		this.spin1();

		if(this.state.nLoad===6){      this.state.gameMSG='The cylinder is full'; this.state.disableLoad=true;}
	}
	spinR()
	{
		let n=(Math.floor(Math.random() * 6));
		console.log("randomspin",n);
		while(n>0){
			this.spin1();
			n--
		
		}
		this.state.gameStage="loaded";
		this.state.disableLoad=true;
		this.state.disableSpin=true;
		this.state.disableFire=false;
		this.setState({ statef: this.statef });

	}

	spin1()
	{

			console.log("gunIndex",this.state.gunIndex)
			if(this.state.gunIndex===5){this.state.gunIndex=0}
			else{this.state.gunIndex++;}
	
		
		
	}

	quit()
	{
		if(this.state.gameStage==="fail")
		{
			// this.state.gameMSG="quit with zero multiplier,score goes to zero as the coconut is dead"
			CreditInterface.addCredits(-CreditInterface.getCredits(), "RussianRoulette");
    		this.props.setCredits(CreditInterface.getCredits());
			this.setState({ statef: this.statef });

		}
		else
		{
			// this.state.gameMSG=" quit with score multiplier = " + this.state.multiplierGained
			CreditInterface.addCredits(-CreditInterface.getCredits()+CreditInterface.getCredits()*this.state.multiplierGained, "RussianRoulette");
 
			this.props.setCredits(CreditInterface.getCredits())
			this.setState({ statef: this.statef });

		}

}

	render() {
		console.log(this.state)
		let pic;
		 switch (this.state.gameStage){
			case 'unloaded':pic=picEmpty; break;
			case 'loaded':pic=picLoaded; break;
			case 'fail':pic=picFail ; break;
			case 'win':pic=picLoaded_s; break;
			default : pic=picEmpty; break;
		 }

		return (
			<div>
				<h1>Russian roulette </h1>
				{/* View */}
				<img src={pic}  style={{width: 800, height: 500,}}/>
				<h5> Cylinder: {this.state.nLoad} / 6 , difficulty of surviving the next round:{6/(6-this.state.nLoad-this.state.countFire)} </h5>
				{/* Controller */}
				<div>
					<p>{"  ..."} {this.state.gameMSG} </p>
						<Button variant="primary" size="lg" onClick={this.fire}disabled={this.state.disableFire}>
						Fire
						</Button>{'   '}
						<Button variant="secondary" size="lg" onClick={this.load} disabled={this.state.disableLoad}> 
						Load
						</Button>{'   '}
						<Button variant="secondary" size="lg" onClick={this.spinR}disabled={this.state.disableSpin}>
						Spin and close 
						</Button>{'   '}
						<Button variant="secondary" size="lg" onClick={this.quit}>
						Stop
						</Button>{'   '}
				</div>
			</div>
		);
	}
}

export default RussianRouletteView;
