import Bootstrap from '../../Bootstrap';
import SudokuModel from './SudokuModel';
import SudokuView from './SudokuView';
import CreditInteface from '../../CreditInterface';

class SudokuController extends Bootstrap {


    constructor(){
        this.model = new SudokuModel();
        this.view = new SudokuView();
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

export default SudokuController;

