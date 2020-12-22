'use strict';
/*
урок 18. контекст выполнения (this) - part 2
обновлена: 09 мая 2020 16:30
Обертка - шпион
Создайте функцию-обертку, которая запоминает все вызовы (аргументы вызова) обернутой ф-ции

Основные требования:
Экспортируйте из файла функцию с именем saveCalls
Функция saveCalls должна принимать функцию как единсвернный параметр, и вернуть функцию, которая будет запоминать все свои вызовы входящей функции в свойстве calls. Каждый вызов храниться как массив аргументов
Важна поддержка функций, которые используют this внутри
Рекомендации:
saveCalls должна возвращать ф-цию с именем withMemory
saveCalls должна создавать массив calls, в который будут вноситься все аргументы, с которыми вызвана withMemory
withMemory присвойте как свойство calls созданный на шаге 2 массив
Пример работы:

    function test(a, b) {
        return Math.sqrt(a * a + b * b);
    }

    const testWithMemory = saveCalls(test);
    testWithMemory(4, 2);
    testWithMemory(9, 1);


    testWithMemory.calls // [ [4, 2], [9, 1] ]

    /* Поддержка функций с контекстом 

    const user = {
     name: 'John',
     sayHi() {
         return this.name;
     }
 };

 const methodWithMemory = saveCalls(user.sayHi);

 methodWithMemory.apply({ name: 'Tom' }); // 'Tom'

 methodWithMemory.calls // [ [] ]
*/

export const saveCalls = func => {
     function withMemory(...args) {
       withMemory.calls.push(args);
       return func.apply(this, arguments);
     } 
     
     withMemory.calls = [];
   
     return withMemory;
   }