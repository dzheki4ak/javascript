/*
урок 13. юнит тесты
обновлена: 11 декабря 2020 10:33
Тестируем калькулятор
Напиши тесты на функцию calc, которая находиться в редакторе. Она должна находиться в файле calculator.js

Основные требования:
Проверь, что работает каждая из операций + - * /
Проверь, что ф-ция правильно отрабатывает, если передана не строка
Тесты и код должны быть в разных файлах
P.S. Код в этой задаче проходит только базовую проверку, для детальной проверки вышлите ссылку на свое решение ментору в чате
*/

export const calc = expression => {
     if (typeof expression !== 'string') {
       return null;
     }
   
     const [a, operation, b] = expression.split(' ');
     let result;
   
     switch (operation) {
       case '+':
         result = +a + +b;
         break;
       case '-':
         result = +a - +b;
         break;
       case '*':
         result = +a * +b;
         break;
       case '/':
         result = +a / +b;
         break;
     }
   
     return `${expression} = ${result}`;
   };
   