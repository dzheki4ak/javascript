/*урок 7. array methods
Возведение в квадрат элементов массива
Создайте функцию squareArray, которая будет принимать массив чисел и возвращать массив с числами возведенными в квадрат

Основные требования:
Функция должна называться squareArray
Функция должна вернуть null, если в качестве аргумента передан не массив
Если аргумент - массив, то функция должна вернуть массив, где каждый элемент возведен в квадрат
Используйте методы массивов для решения текущей задачи. Циклы for и while здесь использовать не нужно
Исходный массив не должен поменяться*/

function squareArray (inArray) {
     if (!Array.isArray(inArray)) {
          return null;
     } else {
          return inArray.map(element => Math.pow(element, 2));
          }
     }

     /*
function squareArray (inArray) {
     let outArray = [];

     if (!Array.isArray(inArray)) {
          return null;
     } else {
          inArray.forEach(element => {
               outArray.push(Math.pow(element, 2));
          });
     }
     return outArray;
}
*/

