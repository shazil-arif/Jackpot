class SudokuModel{
    constructor(){
        this.n = 6;
        this.board = [
            ["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""]
        ]
		this.currentBoard = [
            ["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""],
            ["","","","","","","","",""],
			["","","","","","","","",""]
        ]
        this._initializeRandomBoard();
    }

    _initializeRandomBoard(){
        const possibleBoards = [
			[
				["1","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""]
			],
			[
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""],
				["","","","","","","","",""]
			]
		]
        this.board = possibleBoards[0];
		this.currentBoard = this.board;
    }

    validateBoard(currentBoard){
    }

    updateBoard(currentBoard){

    }

}
export default SudokuModel;