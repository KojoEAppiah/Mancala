const Player = require('./player.js');

beforeEach(()=> { 
	player = new Player();
});

test("When new player is created, its score is set to 0", () => {

	expect(player.score).toEqual(0);
});