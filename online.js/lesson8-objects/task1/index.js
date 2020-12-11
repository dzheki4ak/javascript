'use strict';

const transformToObject = arr => {
     let obj = {};

     arr.forEach(el => {
          obj[el] = el;
     });

     return obj;
};

/*урок 8. объекты: основы
Создание объектов
Создайте функцию, которая входящий массив преобразует в объект

Основные требования:
Функция с именем transformToObject должна принимать массив, как единственный аргумент. Массив может содержать любые строки и числа.
Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива (['a', 17.1, 'John Doe'] => { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' })
Для пустого массива ф-ция должна вернуть пустой объект
*/