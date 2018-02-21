const Player = require('./player.js');
const Board = require('./board.js');

const SIDE_A = 0;
const SIDE_B = 1;

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


test("When evaluateKalahs() is called on a board where the player is winning, it returns 1", () => {

	player.board.selectPot(2, SIDE_A);
	expect(player.evaluateKalahs(player.board)).toEqual(1);
});