const Pot = require('./pot');
const Marble = require('./marble');

var pot;

beforeEach(()=> { 
	pot = new Pot(5);
});

test('Checks that pot starts with a length of 20', () => {
    expect(pot.getLength()).toEqual(20);
});

test('Checks that pot starts with a height of 20', () => {
    expect(pot.getHeight()).toEqual(20);
});

test('Checks that pot initialized with 5 marbles starts with marblecount of 5', () => {
    expect(pot.getMarbleCount()).toEqual(5);
});

test('When a marble is added to a non-empty pot, said pot retains said marble', () => {
    marble1 = new Marble();
    pot.addMarble(marble1);
    marble2 = new Marble();
    pot.addMarble(marble2);
    expect(pot.getMarbles().length).toEqual(7);
});

test("'When getMarbles is called, the Pot's marbles member is set to an array of length 0", () => {
	pot.getMarbles();
    expect(pot.getMarbles().length).toEqual(0);
});