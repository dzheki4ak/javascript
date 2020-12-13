/*
урок 10. числа
обновлена: 28 ноября 2019 15:10
Проверка чисел
Создайте функции, которые будут искать указанные числа в массиве

Основные требования:
Функция с названием getFiniteNumbers должна отбросить все элементы исходного массива, которые не являются конечными числами. Для проверки должна использовать метод Number.isFinite
Функция с названием getFiniteNumbersV2 должна отбросить все элементы исходного массива, которые не являются конечными числами. Для проверки должна использовать метод isFinite
Функция с названием getNaN должна вернуть все элементы исходного массива, которые имеют значение NaN. Для проверки должна использовать метод Number.isNaN
Функция с названием getNaNV2 должна вернуть все элементы исходного массива, которые имеют значение NaN. Для проверки должна использовать метод isNaN
Функция с названием getIntegers должна отбросить все элементы исходного массива, которые не являются целыми числами. Для проверки должна использовать метод
Во всех ф-циях исходный массив должен оставаться неизменным
Сравните результаты работы методов Number.isNaN vs isNaN и Number.isFinite vs isFinite
*/
const array = [1, 2, -5, 'word', '18', 22, {key: 17}, NaN, Infinity, 45, 'sixteen'];

function getFiniteNumbers(array) {
     let techArray = [...array];
     let result = techArray.filter(el => Number.isFinite(el));
     console.log(result);
     return result;
     
};
getFiniteNumbers(array);

function getFiniteNumbersV2(array) {
     let techArray = [...array];
     let result = techArray.filter(el => isFinite(el));
     console.log(result);

     return result;
};
getFiniteNumbersV2(array);

const getNaN = array => {
     let techArray = [...array];
     let result = techArray.filter(el => Number.isNaN(el));
     console.log(result);

     return result;
};
getNaN(array);

const getNaNV2 = array => {
     let techArray = [...array];
     let result = techArray.filter(el => isNaN(el));
     console.log(result);

     return result;
};
getNaNV2(array);

const getIntegers = array => {
     let techArray = [...array];
     let result = techArray.filter(el => Number.isInteger(el));
     console.log(result);
     
     return result;
};
getIntegers(array);
