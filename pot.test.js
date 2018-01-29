const Pot = require('./pot');

var pot;

beforeEach(()=> { 
	pot = new Pot();
});

test('Checks that pot starts with 0 marbles', () => {
  expect(pot.getMarbleCount()).toEqual(0);
});