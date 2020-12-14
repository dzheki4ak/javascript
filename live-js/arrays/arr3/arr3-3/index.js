/*
урок 1. groups stand ups
Как устроен метод массива .map
Создайте ф-цию, которая будет работать аналогичным образом с методом .map массива

Основные требования:
Ф-ция должна называться mapArrayElements и находиться в файле index.js
mapArrayElements(arr, callback) должна принимать 2 аргумента arr - массив, callback - ф-ция, которая будет вызвана с каждым элементом массива arr
Ф-ция callback должна быть вызвана с каждым элементом массива и при каждом вызове получить 3 аргумента callback(arrElement, index, entireArr): arrElement - элемент массива, index - индекс этого элемента в массиве, entireArr - ссылка на весь исходный массив.
mapArrayElements должна вернуть массив, который будет состоять из того, что вернет callback для каждого элемента исходного массива
Исходный массив arr должен остаться неизменным
Длина исходного массива arr и длина результирующего массива должны быть равны
*/
//in: Array, callback(func)
//out: array;


//for callback
//in: number (el), number (index - opt), array (optional)
//out: number

//algo
//1. iterate array;
//2. apply callback for every element;
//3. if callback returns true - add element to result;

const mapArrayElements = (arr, callback) => {
     //put you code here
     const result = [];
     for (let i = 0; i < arr.length; i++) {
       result.push(callback(arr[i], i, arr));
     }
     return result;
   };
   
   const arr = [1, 53, 4, 8, 91, 459, 6, -4];

   const callback = (arrElement, index, entireArr) => {
        return arrElement + 1;
   };
