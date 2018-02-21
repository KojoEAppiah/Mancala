const Board = require('./player.js');

const SIDE_A = 0;
const SIDE_B = 1;

class Player {
	
	constructor(board){
		this.board = board;
		this.score = 0;
		this.side
	}

	setSide(side){
		this.side = side;
	}

	evaluateKalahs(board){
		if(board.p1Kalah.marbles.length == board.p2Kalah.marbles.length)
			return 0;
		else if(board.p1Kalah.marbles.length > board.p2Kalah.marbles.length)
			return 1;
	}
}

module.exports = Player;