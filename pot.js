const Marble = require('./Marble.js');

class Pot {
	constructor(numberOfMarbles){
		this.marbles = this.generateMarbles(numberOfMarbles);
		this.length = 20;
		this.height = 20;
	}

	getLength(){
		return this.length;
	}

	getHeight(){
		return this.height;
	}

	getMarbleCount(){
		return this.marbles.length;
	}

	getMarbles(){
		var marblesToRemove = this.marbles;
		this.marbles = [];
		return marblesToRemove;
	}

	addMarble(marbleToAdd){
		this.marbles.push(marbleToAdd);

	}

	generateMarbles(numberOfMarbles){
		var newMarbles = [];
		for(var i = 0; i < numberOfMarbles; i++){
			newMarbles.push(new Marble());
		}

		return newMarbles;
	}
}

module.exports = Pot;