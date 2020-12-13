/*
урок 10. числа
Поиск максимального числа
Создайте функцию, которая будет возвращать максимальное по модулю число

Основные требования:
Функция должна называться getMaxAbsoluteNumber
Функция должна принимать массив чисел (могут быть дробные, отрицательные и положительные) как единственный аргумент
Функция должна вернуть максимальное по модулю число
Пример работы: [-777, 3, -1, 45, -20] => 777

    
Если передан не массив, или пустой массив, то вернуть null
*/
function getMaxAbsoluteNumber1(array) {
     let max = -Infinity;

     array.forEach(num => {
          if (Math.abs(num) > max) {
               max = Math.abs(num);
          }
     });
     console.log(max);
}
getMaxAbsoluteNumber1([-777, 3, -1, 45, -20]);

function getMaxAbsoluteNumber(array) {
     if (!Array.isArray(array) || array.length < 1) {
         return null;
     } else {
      const absVal = array
      .map(num => Math.abs(num))
 
      const max = Math.max(...absVal)
      console.log(max);
      return max;
      }
 }
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]);