'use strict';
/*
урок 1. groups stand ups
обновлена: 09 декабря 2020 09:52
Как устроен метод массива .filter
Создай ф-цию, которая будет работать аналогичным образом с стандартным методом массива .filter

Основные требования:
Ф-ция должна называться filterArray и находиться в файле index.js
filterArray(arr, callback) должна принимать 2 аргумента arr - массив, callback - ф-ция, которая будет вызвана с каждым элементом массива arr
Ф-ция callback должна быть вызвана с каждым элементом массива и при каждом вызове получить 3 аргумента callback(arrElement, index, entireArr): arrElement - элемент массива, index - индекс этого элемента в массиве, entireArr - ссылка на весь исходный массив
filterArray должна вернуть массив, который будет состоять из того, что вернет callback для каждого элемента исходного массива
Исходный массив arr должен остаться неизменным
Длина исходного массива arr и длина результирующего массива должны быть равны
*/

//in: Array, callback(func)
//out: array;


//for callback
//in: number (el), number (index - opt), array (optional)
//out: boolean

//algo
//1. iterate array;
//2. apply callback for every element;
//3. if callback returns true - add element to result;

/*

const filterArray = (arr, callback) => {
     let result = [];
     for (let i = 0; i < arr.length; i++) {
          const fitsCondition = callback(arr[i], i, arr);
          if (fitsCondition) {
               result.push(arr[i]);
          }
     }
     return result;
};
*/

// test func 

/*
const testArr = [1, 53, 4, 8, 91, 459, 6, -4];
const testCallback = (el, index, arr) => {
     if (el > 5) {
          return true;
     } else {
          return false;
     }
};
*/


// simplification(refactoring)***
const testArr = [1, 53, 4, 8, 91, 459, 6, -4];

const filterArray = (arr, callback) => {
     const result = [];
     for (let i = 0; i < arr.length; i++) {
          if (callback(arr[i], i, arr)) {
               result.push(arr[i]);
          }
     }
     return result;
};

const testCallback = (el, index, arr) => el > 5;
     
const res = filterArray(testArr, testCallback);
console.log(res);



