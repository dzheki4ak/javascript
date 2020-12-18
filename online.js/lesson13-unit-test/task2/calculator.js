'use strict';

export const getSquaredArray = array => {
     return array.map(el => el ** 2);
};

export const getOddNumbers = array => {
     return array.filter(el => el % 2 === 1);
};

export default (num1, num2) => {
     return num1 + num2;
};