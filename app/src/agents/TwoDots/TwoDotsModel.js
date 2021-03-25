class TwoDotsModel{
    constructor(){
        this.n =6;
        this.board = [];
        for(let i = 0; i < this.board.length; i++){
            this.board.push([]);
        }
    }

    set(p, value){
        this.board[p.getX(), p.getY()] = value;
    }

    get(p){
        return this.board[p.getX(), p.getY()];
    }

    getNumRow(){
        return this.n;
    }

    getNumCol(){
        return this.n;
    }

    validateMoves(moves){

    }

    updateBoard(moves){

    }

    _isPlayable(){

    }

    isValidPath(){

    }

    setRandom(p){

    }
}
export default TwoDotsModel;