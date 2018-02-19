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

	}
}

module.exports = Board;