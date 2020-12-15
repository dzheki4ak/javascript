/*
урок 12. строки: практика
Reverse String
Напишите функцию, которая будет "переворачивать строку"

Основные требования:
Функция должна называться reverseString
Функция должна принимать как аргумент строку
Функция должна вернуть строку, где символы будут идти в обратном порядке
Функция должна вернуть null, если пердана не строка
*/

// in: string
// out: string

//algo:
// 1. check if in arg is string;
// 2. split it to symbols
// 3. reverse it
// 4. concat it;
const reverseString = string => {
          if (typeof string !== 'string') {
               return null;
          }          
          return string.split('').reverse().join('');
};

const string  = 'iuhk an vohsiP';
