'use strict';

/*
урок 1. groups stand ups
Псевдо массив arguments
Перемножте все аргументы ф-ции и верните результат

Основные требования:
Ф-ция должна называться multiply и должна находиться в файле index.js
Ф-ция multiply принимает в аргументах числа (неограниченное количество), перемножает их возвращает результат
*/

//arguments, (keeps all argumets which were used when called function) - pseudoarray, is obect that behaves as array
//does not work with arrow function

//rest operator = ...args , collects all function argumants to array

//spread operator = breaks array to separate elements

//in: num, num ...
//out: number

// function multiply() {
//      console.log(arguments);
//      console.log(Object.values(arguments));
// }
/*
multiply(5);//5
multiply(5, 10);//50
multiply(2, 3, 5);//30
multiply(5, 10, 1, 5, 6, 8, 2, 2, 4);//...


function multiply() {
     let resArr = Object.values(arguments);
     for (let el of resArr) {
          resArr.push(el *= el);
     }
     return resArr;
}

function multiply() {
     return Object.values(arguments).reduce((acc, el) => acc * el);
};
*/

const multiply = (...args) => {
     return args.reduce((acc, el) => acc * el);
};