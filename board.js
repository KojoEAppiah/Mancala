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
}

module.exports = Board;