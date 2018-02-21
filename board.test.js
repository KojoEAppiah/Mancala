const Marble = require('./marble');
const Pot = require('./pot');
const Board = require('./board');

var board;

beforeEach(()=> { 
	board = new Board(5);
});

test('When initPots is passed 5 and 5, 5 pots are initialized with 5 marbles each', () => {

	board.initPots(5, 5);

	var fivePerPot = true;
	for(var i = 0; i < board.p1Pots.length; i++){
		if(board.p1Pots[i].marbles.length != 5)
			fivePerPot = false;
	}

    expect(fivePerPot).toBeTruthy();
});


test('When a board is in a win state, the Board.isWin returns true', () => {

	board.initPots(5, 5);

	for(var i = 0; i < board.p1Pots.length; i++){
		board.p1Pots[i].getMarbles();
	}

    expect(board.isWin()).toBeTruthy();
});