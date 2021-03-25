import Bootstrap from '../../Bootstrap';
import TwoDotsModel from './TwoDotsModel';
import TwoDotsView from './TwoDotsView';
import CreditInteface from '../../CreditInterface';

class TwoDotsController extends Bootstrap {
    // implement the boostrap methods

    // implement the two dots stuff

    constructor(){
        this.model = new TwoDotsModel();
        this.view = new TwoDotsView();
        this.points = 0;
        this.moveCount = 30;
    }

    setView(){

    }

    updateModel(){

    }

    validateInput(){

    }

    incrementScore(){
        this.points++;
    }

    updateCredits(credits){
        CreditInteface.addCredits(credits);
    }

    gameCanContinue(){
        return this.moveCount > 0;
    }

    endCurrentGame(){

    }

    getInstruction(){


    }

    exitCurrentContext(){

    }

    getGamesList(){

    }

    startNewGame(game){
        
    }
}

