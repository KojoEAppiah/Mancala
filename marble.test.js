const Marble = require('./marble');

var marble = new Marble();

test('sets marble color to red', () => {
  marble.setColor([255, 0, 0]);
  expect(marble.color).toEqual([255, 0, 0]);
});

test('sets marble location to (1,2)', () => {
  marble.setPosition(1,2);
  expect(marble.position).toEqual(1,2);
});