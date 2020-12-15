import {getSquaredArray, getOddNumbers} from './calculator.js';

it('returns array of sqr umbers', () => {
     const result = getSquaredArray([2,4,6]);
     expect(result).toEqual([4,16,36]);
});

it('returns array of odd numbers', () => {
     const result = getOddNumbers([1,2,3,4,5,6,7]);
     expect(result).toEqual([1,3,5,7]);
});


import getSum from './calculator.js';

it('returns sum of 2 numbers', () => {
     const result = getSum(5,6);
     expect(result).toEqual(11);
});