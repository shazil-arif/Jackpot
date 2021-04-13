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
    }

    _intializeRandomBoard(){
        

        for(let i = 0; i < this.n; i++){
            for(let j = 0; j < this.n; j++){
                this.setRandom(new Point(i,j));
            }
        }
        // if(!this._isPlayable()) this._intializeRandomBoard();
    }

    setRandom(p){
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.set(p, color);
        if(!this._isPlayable()) this.setRandom(p);
    }

    set(p, value){
        this.board[p.getX()][p.getY()] = value; // value should be hex color ?
    }

    get(p){
        return this.board[p.getX()][p.getY()];
    }

    getNumRow(){
        return this.n;
    }

    getNumCol(){
        return this.n;
    }

    validateMoves(moves){
        if (moves.size() <= 1) return false;
        for (const move of moves){
            if(!this.isValidPoint(move)) return false;
        }

        return this.isValidPath(moves);

    }

    updateBoard(moves){
        for (const move of moves){
            let row = move.getX();
			let col = move.getY();
			for(let i = row; i >= 1; i--) {
				//exchange board[row][col] with board[row-1][col]
				let temp = this.board[i-1][col];
				this.set(move, temp);
				row--;
			}
			this.setRandom(move);
        }

    }

    _isPlayable(){
        let x = [-1,1,0,0];
		let y = [0,0,1,-1];
		
		//iterate over entire board
		for(let i = 0; i < this.n; i++) {
			for(let j = 0; j < this.n; j++) {
				for(let k = 0; k < x.length; k++) {
					//check if neighbor has the same color
					let neighbour = new Point(i+x[k],j+y[k]);
					if(this.isValidPoint(neighbour)) {
						let neighbor_color = this.board[neighbour.getX()][neighbour.getY()] //color of neighboring cell
						let current_color = this.board[i][j];
						if(neighbor_color === current_color) return true;
					}
				}
			}
		}
		//no neighbor with same color
		return false;
    }

    isValidPath(moves){
        // path = [(1,1), (2,1), (3,1)] can we reach 2,1 from 1,1 moving only horizontall or vertically and are they same colrs?
        let x = [1, -1, 0, 0];
        let y = [0, 0, -1, 1]
        let visited = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];

        let path = moves.getList();

        for(let i = 0; i < path.length - 1; i++){
            let current = path[i];
            let next = path[i + 1];
            let currentColor = this.board[current.getX()][current.getY()];

            for(let k = 0; k < x.length; k++){
                let temp = new Point(current.getX() + x[k], current.getY() + y[k]);
                if(this.isValidPoint(temp)){
                    let neighbourColor = this.board[temp.getX()][temp.getY()];

                    if (next.getX() === temp.getX() && next.getY() === temp.getY()){
                        if (visited[next.getX()][next.getY()]) return false;
                        
                        visited[next.getX()][next.getY()] = true;
                        if(currentColor !== neighbourColor) return false;
                        
                    }
                }
            }
            if(!visited[next.getX()][next.getY()]) return false;
        }

        return true;
    }

    isValidPoint(point){
        let x = point.getX();
        let y = point.getY();
        return x >= 0 && x < this.n && y >= 0 && y < this.n;
    }
}
export default TwoDotsModel;