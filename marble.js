class Marble {

	constructor(){
		this.color = [0, 0, 0];
		this.posiiton = [0, 0];
	}

	setColor(color){
		this.color = color;
	}

	setPosition(position){
		this.position = position;
	}
}

module.exports = Marble;