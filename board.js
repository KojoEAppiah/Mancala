const Marble = require('./marble');
const Pot = require('./pot');

class Board{
	constructor(){
		this.numberOfPots = 0;
		this.p1Pots = [];
		this.p2Pots = [];
	}

	initPots(numberOfPots, marblesPerPot){

		for(var index = 0; index < numberOfPots; index++){
			this.p1Pots.push(new Pot(marblesPerPot));
			this.p2Pots.push(new Pot(marblesPerPot));
		}
		this.numberOfPots = numberOfPots;
	}

	isWin(){

		for(var index = 0; index < this.numberOfPots; index++){
			if(this.p1Pots[index].marbles.length != 0){
				break;
			}
			return true;
		}

		for(var index = 0; index < this.numberOfPots; index++){
			if(this.p2Pots[index].marbles.length != 0){
				break;
			}
			return true;
		}

		return false;
	}

	clone(){
		
		var newBoard = new Board();
		for(var i; i < this.numberOfPots; i++){
			newBoard.p1Pots[i] = this.p1Pots[i];
		}
		return newBoard;
	}

	selectPot(potNumber, side){

		var marblesToDispense = this.p1Pots[potNumber].getMarbles();
	
		var i = potNumber+1;

		while(marblesToDispense.length > 0){
			while(i < 5 && marblesToDispense.length > 0){
		 	   this.p1Pots[i++].addMarble(marblesToDispense.pop());
			}
			i = 0;
			while(i < 5 && marblesToDispense.length > 0){
		 	   this.p2Pots[i++].addMarble(marblesToDispense.pop());
			}
		}

	}
}

module.exports = Board;