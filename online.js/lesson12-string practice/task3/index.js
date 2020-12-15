/*
урок 12. строки: практика
Очистка данных о транзакциях
На вход ф-ции поступают данные в виде массива, элементами которого являются суммы совершенных транзакций. Но данные не очень качественны и могут содержать лишние пробелы или даже не числа. Функция должна отсечь лишнее и вернуть только полезные и отформатированные данные

Основные требования:
Функция должна называться cleanTransactionsList
Функция должна принимать как аргумент массив транзакций (['  1.9 ', '16.4', 17, ' 1 dollar '])
Если элемент содержит буквы - отбросить его
Если элемент содержит пробелы - обрезать пробелы в начале и в конце
Вернуть массив в формате (['$1.90', '$16.40', '$17.00'])
Каждый элемент результирующего массива должен быть строкой, начинаться с $ и сумма должна иметь строго 2 знака после запятой
Исходный массив должен остаться неизменным
*/

// F:
// in: array;
// out: array;

// C-B-F:
// in: string
// out: string

//algo:
// 1. iterate the array;
// 2. trim all the elements;
// 3. bring elements to number;
// 4. if element is NaN = skip it;
// 5. add $ to each element;
// 6. push result to a result array;

const transArray = ['  1.9 ', '16.4', 17, ' 1 dollar '];

/*
function cleanTransactionsList(transArray) {
     let step1 = transArray.map(el => el.toString().trim());
     let step2 = step1.map(el => +el);
     let step3 = step2.filter(el => !isNaN(el));
     let step4 = step3.map(el => '$' + el.toFixed(2));

     return step4;
}
*/

//cleanTransactionsList(transArray);

const cleanTransactionsList = transArray => {
     return transArray.map(el => el.toString().trim())
     .map(el => +el).filter(el => !isNaN(el)).filter(el => !isNaN(el))
     .map(el => '$' + el.toFixed(2));
};