'use strict';
/*
урок 17. контекст выполнения (this) - part 1
обновлена: 01 мая 2020 09:31
Вызов ф-ции с помощью call
С помощью ф-ции call можно вызывать ф-цию с заданным контекстом. А так же дополнительно можно передавать в ф-цию аргументы через запятую (func.call(context, arg1, arg2, ...))

Основные требования:
Начальный код находится в редакторе ниже
Используйте метод .call для вызова ф-ции в каждом задании
Код для проверки должен находится в файле index.js
*/
/* ===> 1 <=== */
const student = {
     name: 'Tom',
   };
   
   export function sayName() {
     console.log(this.name);
   }
   
   // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
   // ... your code here
   sayName.call(student);
   
   // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
   // ... your code here
   
   sayName.call({name: 'Bruce'});
   
   /* ===> 2 <=== */
   const company = {
     companyName: 'Microsoft'
   };
   
   function greeting(firstName, lastName) {
     console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
   }
   
   // вызовите ф-цию greeting так, чтобы в консоль вывелось 
   // 'Hello, Bob Marley. Welcome to the Microsoft'
   // используйте объект company
   // ... your code here
   greeting.call(company, 'Bob', 'Marley');
   
   
   /* ===> 3 <=== */
   const country = {
     countryName: 'Ukraine',
     capital: 'Kyiv'
   };
   
   function getPopulation(population) {
     return `Population in ${this.countryName} is ${population}`;
   }
   
   // вызовите ф-цию getPopulation так, чтобы она вернула 
   // 'Population in Ukraine is 43000'
   // 43000 передавайте в виде числа
   // используйте объект country
   // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
   // ... your code here
   const population = getPopulation.call(country, 43000);
   console.log(population);
   
   
   /* ===> 4 <=== */
   const transaction = {
     amount: 1200,
     operation: 'sell',
     currency: 'USD',
     exchange: 'NYSE',
     printTransaction() {
         console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
     }
   }
   
   const anotherTransaction = {
     amount: 400,
     operation: 'buy',
     currency: 'USD',
     exchange: 'NASDAQ',
   };
   
   // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
   // '400 USD - buy on NASDAQ'
   // используйте объект anotherTransaction как контекст
   // ... your code here
   transaction.printTransaction.call(anotherTransaction);