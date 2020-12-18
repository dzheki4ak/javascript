'use strict';

/*
урок 16. hoisting (поднятие)
обновлена: 03 декабря 2019 10:28
Фабрика функций
Создайте фабрику массивов ф-ций :)

Основные требования:
Файл index.js должен експортировать ф-цию под именем createArrayOfFunctions
Ф-ция createArrayOfFunctions должна принимать целое число, как единственный аргумент. Это число укажет размерность результирующего массива
Ф-ция должно вернуть массив заданной размерности, каждым элементом которого будет ф-ция, которая возвращает свой индекс в массиве
Пример работы: createArrayOfFunctions(9)[5](); // 5
Если передано не число, нужно вернуть null
Если аргумент не передан, то вернуть пустой массив
*/

function createArrayOfFunctions(number) {
     if (number === undefined) {
          return [];
     }     
     if (typeof number != 'number') {
          return null;
     }

     return Array(number).fill().map((elem, i) => elem = function() {
          return i;
     });

}
createArrayOfFunctions(10);