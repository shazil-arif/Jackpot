import Point from "./util/Point";

class TwoDotsModel{
    constructor(){
        this.n = 6;
        this.board = [];
        this.colors = ['#F03C69', '#FFCD32', '#2BAD5D', '#2ABABF', '#CDDC28', '#B91E8C'];
        for(let i = 0; i < this.n; i++){
            this.board.push([]);
        }
        this._intializeRandomBoard();
    }

    _intializeRandomBoard(){
        

        for(let i = 0; i < this.n; i++){
            for(let j = 0; j < this.n; j++){
                this.board[i][j] = 0;
                this.setRandom(new Point(i,j));
            }
        }
        // if(!this._isPlayable()) this.intializeRandomBoard();
    }

    set(p, value){
        this.board[p.getX(), p.getY()] = value; // value should be hex color ?
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
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.set(p, color);
    }
}
export default TwoDotsModel;