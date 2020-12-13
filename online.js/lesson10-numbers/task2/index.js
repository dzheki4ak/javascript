/*
урок 10. числа
Парсинг чисел
Создайте функции, которые будут парсить числа в массиве

Основные требования:
Функция с названием getParsedIntegers должна каждый элемент массива привести к целому чилому и вернуть их в виде массива. Для парсинга должен использоваться метод Number.parseInt
Функция с названием getParsedIntegersV2 должна каждый элемент массива привести к целому чилому и вернуть их в виде массива. Для парсинга должен использоваться метод parseInt
Функция с названием getParsedFloats должна каждый элемент массива привести к дробному чилому и вернуть их в виде массива. Для парсинга должен использоваться метод Number.parseFloat
Функция с названием getParsedFloatsV2 должна каждый элемент массива привести к дробному чилому и вернуть их в виде массива. Для парсинга должен использоваться метод parseFloat
Во всех ф-циях исходный массив должен оставаться неизменным
Сравните результаты работы методов Number.parseInt vs parseInt и Number.parseFloat vs parseFloat
*/
const array = [-17.3, 18.4, 18.7, '17', 'six', null, NaN, Infinity];

function getParsedIntegers (array) {
     let techArray = [...array];
     techArray = techArray.map(el => Number.parseInt(el));

     console.log(techArray)
     return techArray;
}
getParsedIntegers(array);

function getParsedIntegersV2 (array) {
     let techArray = [...array];
     techArray = techArray.map(el => parseInt(el));

     console.log(techArray);
     return techArray;
}
getParsedIntegersV2(array);

function getParsedFloats (array) {
     let techArray = [...array];
     techArray = techArray.map(el => Number.parseFloat(el));

     console.log(techArray);
     return techArray;
}
getParsedFloats(array);

function getParsedFloatsV2 (array) {
     let techArray = [...array];
     techArray = techArray.map(el => parseFloat(el));

     console.log(techArray);
     return techArray;
}
getParsedFloatsV2(array);

