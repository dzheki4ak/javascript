/*
урок 8. объекты: основы
Объект. Свойства объекта
Задан объект. Прочитайте свойства объекта

Основные требования:
Начальный код задан в редакторе ниже
Получите данные из объекта transaction теми способами, что указаны в комментариях и выведите эти данные в консоль
*/

const transaction = {
     currency: 'USD',
     value: 170,
     operation: 'sale',
     agent: {
       country: 'Ukraine',
       company: 'NYSE'
     },
     'operation time': 1584029990001
   };
   
   /* выведите в консоль значение свойства 'currency' с помощью точки */
   
   console.log(transaction.currency);
   
   /* выведите в консоль значение свойства 'value' с помощью квадратных скобок */
   
   
   
   console.log(transaction['value']);
   /* выведите в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
   const key = 'operation';
   console.log(transaction[key]);
   
   /* выведите в консоль значение свойства 'company' используя квадратные скобки */
   
   console.log(transaction['agent']['company']);
   
   /* выведите в консоль значение свойства 'country' используя точку */
   
   console.log(transaction.agent.country);
   
   /* выведите в консоль значение свойства 'operation time' используя квадратные скобки */
   
   console.log(transaction['operation time']);