import {getMinSquaredNumber} from './getMinSquaredNumber.js';

it('returs a sqr of the min (abs) number in array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(Infinity);
});

it('returs a sqr of the min (abs) number in array', () => {
  const result = getMinSquaredNumber('hello');
  expect(result).toEqual(null);
});

it('returs a sqr of the min (abs) number in array', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});