function arrAverage(arr) {
     if (!Array.isArray(arr)) {
          return null;
     } else {
          const reduce = (acc, currVal) => acc + currVal;
          const sum = arr.reduce(reduce);
          const avg = sum / arr.length;
          return avg;
     }
}

/*урок 7. array methods
Нахождение среднего
Напишите функцию которая будет находить среднее арифметическое элементов масссива

Основные требования:
Функция должна называться arrAverage(arr)
Функция должна вернуть null, если в качестве аргумента передан не массив
Если аргумент - массив, то функция должна возвращать среднее арифметическое элементов масссива
Используйте метод массивов reduce для решения текущей задачи. Циклы for и while здесь использовать не нужно

Пример работы:
Input: arrAverage([2, 5, 6, 3])
Output: 4*/