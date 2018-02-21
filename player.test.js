const Player = require('./player.js');

var player;

beforeEach(()=> { 
	player = new Player();
});

test("When new player is created, its score is set to 0", () => {

	player = new Player();
	expect(player.score).toEqual(0);
});