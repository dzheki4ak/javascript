/*
урок 11. строки
Разбить строку на подстроки
Напишите ф-цию, которая разделит входящую строку на строки с указанным к-вом символов и вернет их в виде массива

Основные требования:
Функция должна называться splitString
Функция должна принимать строку в первом аргументе и число во втором
Число во втором аргументе должно указывать, сколько символов будет в каждой подстроке
Функция должна вернуть массив, содержащий подстроки
Последняя подстрока должна быть дополнена точками . до нужного к-ва символов
Пример работы ф-ции: splitString('abcd efgh', 4) => ['abcd', ' efg', 'h...']
Функция должна вернуть null, если в первом аргументе не строка
функция должна делить на подстроки длиной 10 символов, если не задан второй аргумент
*/

function splitString (string, number = 10) {
     let arr = [];
     let startFrom = 0;
     let slice = '';

     if(typeof string !== 'string') {
          return null;
     } 

     while(true) {
          slice = string.substr(startFrom, number);
          if (slice.length < number) {
               slice = slice + '.'.repeat(number - slice.length);
               arr.push(slice);
               break;
          }
          arr.push(slice);
          startFrom += number;
     }


     return arr;
}