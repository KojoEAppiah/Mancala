const Marble = require('./marble');
const Pot = require('./pot');
const Board = require('./board');

const SIDE_A = 0;
const SIDE_B = 1;


var board;

beforeEach(()=> { 
	board = new Board();
});

test("When a Board is initialized, the kalah's both start with 0 marbles", () => {

	board.initPots(5, 5);

    expect(board.p1Kalah.marbles.length).toEqual(0);
    expect(board.p2Kalah.marbles.length).toEqual(0);
});

test('When initPots is passed 5 and 5, 5 pots are initialized with 5 marbles each', () => {

	board.initPots(5, 5);

	var fivePerPot = true;
	for(var i = 0; i < board.pots[SIDE_A].length; i++){
		if(board.pots[SIDE_A][i].marbles.length != 5)
			fivePerPot = false;
	}

    expect(fivePerPot).toBeTruthy();
});

test('When a Board is cloned, the resulting Board has the same state as the source board', () => {

	board.initPots(5, 5);
	board.selectPot(2, 0);
	var clonedBoard = new Board(board);

	for(var i = 0; i < clonedBoard.numberOfPots; i++){
		expect(clonedBoard.pots[SIDE_A][i].marbles.length).toEqual(board.pots[SIDE_A][i].marbles.length);
	}
});

test('When a board is in a win state, Board.isWin() returns true', () => {

	board.initPots(5, 5);

	for(var i = 0; i < board.pots[SIDE_A].length; i++){
		board.pots[SIDE_A][i].getMarbles();
	}

    expect(board.isWin()).toBeTruthy();
});

test('When a Board.clone() is called, the Board it returns has the same member values as the Board that called the function', () => {

	board.initPots(5, 5);

	board.pots[SIDE_A][2].getMarbles();

	var newBoard = new Board();
	for(var i = 0; i < this.numberOfPots; i++){
	    expect(board.clone().pots[SIDE_A][i].marbles.length).toEqual(newBoard.clone().pots[SIDE_A][i].marbles.length);
	}
});

test('When a Pot with 5 marbles is selected, the new 5 pots will gain a marble', () => {

	board.initPots(5, 5);

	var marblesLeft = board.pots[SIDE_A][3].marbles.length;
	board.selectPot(3, 0);

	var i = 4;


	while(i < 5 && marblesLeft > 0){
	 	   expect(board.pots[SIDE_A][i++].marbles.length).toEqual(6);
	 	   marblesLeft--;
	}
	i = 0;
	while(i < 5 && marblesLeft > 0){
   		expect(board.pots[SIDE_B][i++].marbles.length).toEqual(6);
   		marblesLeft--;
	}

});

test('When a Pot is selected with enough marbles to cross sides more than once, the marbles are distributed appropriately', () => {

	board.initPots(5, 16);

	var marblesLeft = board.pots[SIDE_A][3].marbles.length;
	
	var selectedPot = 3;
	board.selectPot(selectedPot, 0);

	var i = selectedPot + 1;


	while(marblesLeft > 0){
		while(i < 5 && marblesLeft > 0){
			if(i != selectedPot){
		 	   expect(board.pots[SIDE_A][i++].marbles.length).toEqual(17);
			}
		 	else{
		 	   expect(board.pots[SIDE_A][i++].marbles.length).toEqual(18);
		 	   marblesLeft--;
		 	}
		}
		i = 0;
		while(i < 5 && marblesLeft > 0){
	   		expect(board.pots[SIDE_B][i++].marbles.length).toEqual(19);
	   		marblesLeft--;
		}
	}

});