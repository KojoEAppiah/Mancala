const Player = require('./player.js');
const Board = require('./board.js');

var player;

beforeEach(()=> { 
	var board = new Board();
	board.initPots(5, 5);
	player = new Player(board);
});

test("When new player is created, its score is set to 0", () => {

	expect(player.score).toEqual(0);
});

test("When evaluateKalahs() is called on a board where the two players kalahs are equal, it returns 0", () => {

	expect(player.evaluateKalahs(player.board)).toEqual(0);
});