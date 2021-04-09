import Point from "./util/Point";

class TwoDotsModel{
    constructor(){
        this.n = 6;
        this.board = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ]
        this.colors = ['#F03C69', '#FFCD32', '#2BAD5D', '#2ABABF', '#CDDC28', '#B91E8C'];
      
        
        this._intializeRandomBoard();
        console.log(this.board);
    }

    _intializeRandomBoard(){
        

        for(let i = 0; i < this.n; i++){
            for(let j = 0; j < this.n; j++){
                this.setRandom(new Point(i,j));
            }
        }
        if(!this._isPlayable()) this._intializeRandomBoard();
    }

    setRandom(p){
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.set(p, color);
    }

    set(p, value){
        this.board[p.getX()][p.getY()] = value; // value should be hex color ?
    }

    get(p){
        console.log(p)
        return this.board[p.getX()][p.getY()];
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
        return true;
    }

    isValidPath(){

    }
}
export default TwoDotsModel;