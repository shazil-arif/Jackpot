import Bootstrap from '../../Bootstrap';
import TwoDotsModel from './TwoDotsModel';
import TwoDotsView from './TwoDotsView';
import CreditInteface from '../../CreditInterface';

class TwoDotsController extends Bootstrap {
    // implement the boostrap methods

    // implement the two dots stuff

    constructor(props){
        // this.model = new TwoDotsModel();
        // this.view = new TwoDotsView();
        super(props);
        this.points = 0;
        this.moveCount = 5;
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

export default new TwoDotsController();

