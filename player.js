const Board = require('./player.js');

class Player {
	
	constructor(board){
		this.board = board;
		this.score = 0;
	}
}

module.exports = Player;