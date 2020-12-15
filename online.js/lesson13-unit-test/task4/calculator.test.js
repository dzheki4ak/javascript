import { calc } from './calculator';

it('returns sum of numbers', () => {
  const result = calc('2 + 2');
  expect(result).toEqual('2 + 2 = 4');
});

it('returns deduction of numbers', () => {
  const result = calc('6 - 3');
  expect(result).toEqual('6 - 3 = 3');
});

it('returns product of numbers', () => {
  const result = calc('20 * 2');
  expect(result).toEqual('20 * 2 = 40');
});

it('returns division of numbers', () => {
  const result = calc('50 / 10');
  expect(result).toEqual('50 / 10 = 5');
});

it('returns null if argument is not a string', () => {
  const result = calc(100);
  expect(result).toEqual(null);
});