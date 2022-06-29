const { sum } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
  // O QUE É ASSERTION?
  // determinar se o resultado da chamada de um método corresponde ao que eu estou esperando.
  expect(sum(2, 2)).toBe(4);
});
