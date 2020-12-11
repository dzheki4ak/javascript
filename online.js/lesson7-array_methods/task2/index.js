/*
Создайте функцию sortDesc, которая будет сортировать перданный массив чисел по убыванию

Основные требования:
Функция должна называться sortDesc
Функция должна отсортировать исходный массив в порядке убывания
Исходный массив не должен измениться
*/

const inArray = [6, 43, 64, 65, 654, 1, 15, 5, 31, 4, 43, 6];

function sortDesc(inArray) {
     let outArr = [...inArray];
     function compare(a, b) {
          if (a < b) {
               return 1;
          }
          return -1;
     }
     outArr.sort(compare);

     return outArr;
}