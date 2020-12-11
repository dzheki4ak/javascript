/*Создайте функцию getSpecialNumbers, которая будет принимать массив чисел и возвращать отфильтрованный массив

Основные требования:
Функция должна называться getSpecialNumbers
Функция должна отбросить все элементы исходного массива, которые не кратны 3, и вернуть массив из элементов кратных 3-м
Исходный массив не должен поменяться*/

const inArray = [6, 43, 64, 65, 654, 1, 15, 5, 31, 4, 43, 6];

function getSpecialNumbers(inArray) {
     let specialArr = [];
     inArray.forEach(element => {
          if (element % 3 === 0) {
          specialArr.push(element);
          }
     });
     return specialArr;
}

