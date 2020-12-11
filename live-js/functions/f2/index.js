//Teck task step by step

//1. Lean task requirements
//2. Create sbs algo (& input/output for F)
//3. Create a draft solution & test it
//4. Code refactoring -> final test -> final solution
/*
Простые числа
Создайте ф-цию, которая ищет все простые числа от 1 до n. 
Число является простым, если оно делиться без остатка только на 1 и само на себя

Основные требования:
Имя ф-ции должно быть getPrimes
Функция должна принимать целое положительное число
Функция должна выводить в консоль все простые числа меньше или равно заданного числа
Помним, что "1" не является простым числом
Ничего дополнительно в консоль не выводите
*/

//algo
//1. Iterat all numbers
//2. Check if num is prime or not
//a. Iterate from 2 to NUM - 1

function isPrime(num) {
     for (let i = 2; i < num - 1; i++) {
          if (num % i === 0) {
               return false;
          }
     }

     return true;
}

function getPrimes(n) {
     for (let i = 2; i < n; i++) {
          if (isPrime(i)) {
               console.log(i);
          }
     }
}