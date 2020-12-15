import { calc } from './calculator';

it('should get sum of numbers', () => {
  const result = calc('2 + 2');
  expect(result).toEqual('2 + 2 = 4');
});

it('should get minus of numbers', () => {
  const result = calc('6 - 3');
  expect(result).toEqual('6 - 3 = 3');
});

it('should get product of numbers', () => {
  const result = calc('20 * 2');
  expect(result).toEqual('20 * 2 = 40');
});

it('should get division of numbers', () => {
  const result = calc('50 / 10');
  expect(result).toEqual('50 / 10 = 5');
});

it('should enter not a string', () => {
  const result = calc(100);
  expect(result).toEqual(null);
});