'use strict';
/*
(1)
https://gromcode.com/courses/front-end-live-sessions/tasks/3552
урок 1. groups stand ups
Callback функции
Напиши функцию sum, которая будет считать сумму чисел на промежутке [from,to] и выводить результат в консоль с помощью функции printResult

Основные требования:
Ф-ция sum должна принимать три параметра - from, to, printer, где printer - функция которая выводит результат в консоль
Ф-ция printResult должна принимать результат вычислений (число) num как единственный параметр и воводить его в консоль в формате Result is: num
Вызови функцию sum на 2-3 тестовых данных

(2)
https://gromcode.com/courses/front-end-live-sessions/tasks/3374
урок 1. groups stand ups
обновлена: 09 декабря 2020 08:31
Методы работы с массивами. Overview
Чем больше практики - тем лучше понимание. 
Начнем с простого. Сделай преобразования массива с помощью методов массива

Основные требования:
Стартовый код в редакторе ниже
Код должен находиться в файле index.js
Выполни все действия, указанные в комментариях
*/

//(2)
/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
const lastNum = numbersList1.pop();
console.log(lastNum); // покаже видалене число
console.log(numbersList1);


// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];

//input: number
//output: number

const pushRes = numbersList2.push(20);
console.log(pushRes); // покаже добавлене число
console.log(numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];

// input: none //no arguments
// output: number
const firstNumber = numbersList3.shift();
console.log(firstNumber);

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

// input: number
// output: number
const numbersList4 = [1, 2, 3, 4, 5];

const unshiftResult = numbersList4.unshift(44);
console.log(unshiftResult);
console.log(numbersList4);

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [123, 5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// input: function, object
// output: array

const bigNumbers = anotherNumbersList.filter(filterCallback); // бере число, передає в колбек, колбек перевіряє на умову
console.log(bigNumbers);
console.log(anotherNumbersList);

// input: number, element(index), array
// output: boolean
function filterCallback(elem, index, array) {
     if (elem > 5) {
          return true;
     } else {
          return false;
     }
}

const bigNumbers1 = anotherNumbersList.filter(elem => elem > 5);


const bigNumbers2 = anotherNumbersList.filter(function(elem) {
      if (elem > 5) {
          return true;
     } else {
          return false;
     }});

const bigNumbers3 = anotherNumbersList.filter(function(element) {
     return element > 5;
});


// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here

const bigNumbers4 = anotherNumbersList.filter(elem => elem > 5);


/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из anotherNumbersList
// выведи squaredNumbers в консоль

// put your code here

// input: call back function, object
// output: array

anotherNumbersList.map((element, index, array) => {
     Math.pow(element, 2);
});

anotherNumbersList.map(element => Math.pow(element, 2));

anotherNumbersList.map(element => 'hello ' + element);


//input: number
//output: number, element(index), array

function callback() {

}


/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в anotherNumbersList и выведи его в консоль

// put your code here





/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива anotherNumbersList

// put your code here





//(1)

/**
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
**/
// input: number, number, function
// output: undefined

function sum(from, to, printer) {
     let sum = 0;
     while (from < to) {
          sum += from;
          from++;
     }

     printer(sum);
   }

//input: number
//output: underfined
   
   function printResult(res) {
     console.log('Result is: ' + res);
   }
   sum(5, 10, printResult);

