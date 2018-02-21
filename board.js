const Marble = require('./marble');
const Pot = require('./pot');

const SIDE_A = 0;
const SIDE_B = 1;

class Board{
	constructor(boardToClone){
		if(!boardToClone){
			this.numberOfPots = 0;
			this.pots = [[],[]]
			this.p1Kalah = new Pot(0);
			this.p2Kalah = new Pot(0);
		}
		else{
			this.cloneBoard(boardToClone);
			return this;
		}
	}

	initPots(numberOfPots, marblesPerPot){

		for(var index = 0; index < numberOfPots; index++){
			this.pots[SIDE_A].push(new Pot(marblesPerPot));
			this.pots[SIDE_B].push(new Pot(marblesPerPot));
		}
		this.numberOfPots = numberOfPots;
	}

	isWin(){

		for(var index = 0; index < this.numberOfPots; index++){
			if(this.pots[SIDE_A][index].marbles.length != 0){
				break;
			}
			return true;
		}

		for(var index = 0; index < this.numberOfPots; index++){
			if(this.pots[SIDE_B][index].marbles.length != 0){
				break;
			}
			return true;
		}

		return false;
	}

	cloneBoard(boardToClone){
		
		var newBoard = new Board();
		for(var i; i < this.numberOfPots; i++){
			newBoard.pots[SIDE_A][i] = this.pots[SIDE_A][i];
		}
		return newBoard;
	}

	selectPot(potNumber, side){

		var marblesToDispense = this.pots[SIDE_A][potNumber].getMarbles();
	
		var i = potNumber+1;

		while(marblesToDispense.length > 0){

			while(i < 5 && marblesToDispense.length > 0){
		 	   this.pots[SIDE_A][i++].addMarble(marblesToDispense.pop());
			}

			i = 0;
			while(i < 5 && marblesToDispense.length > 0){
		 	   this.pots[SIDE_B][i++].addMarble(marblesToDispense.pop());
			}
		}

	}
}

module.exports = Board;