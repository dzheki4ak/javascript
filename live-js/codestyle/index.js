//WITHDRAW

/*
урок 7. array methods
обновлена: 24 августа 2020 20:39
Withdraw - методы массивов
Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно функция будет возвращать -1

Считаем что в массиве clients хранятся имена клиентов, а в массиве balances - балансы их счетов соответственно. То есть у клиента по индексу 2 с массива clients, баланс счета - это значение по индексу 2 с массива balances

На вход гарантировано приходит массив строк, массив чисел, строка (имя клиента) и число (сумма на снятие)

Основные требования:
Функция должна называться withdraw(clients, balances, client, amount)
Функция должна снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно функция будет возвращать -1 (деньги в этом случае не должны быть сняты)
Используйте методы массивов для решения текущей задачи. Циклы for и while здесь использовать не нужно
*/

/*
'use strict';

const withdraw = (clients, balances, client, amount) => {

    //put your code here




}

//example 1:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//output
//-1
//и массив balances должен быть [1400, 87, -6]
*/


// BAD

const withdrawB = (clients, balances, client, amount) => {
     const ind = clients.indexOf(client);
     if (amount > balances[ind]) {
       return -1;
     } else if (amount <= balances[ind]) {
       const result = [];
       balances.forEach(num => {
         if (num === balances[ind]) {
           result.push(num - amount);
         } else {
           result.push(num);
         }
       });
       return result[ind];
     }
   };


//GOOD
const withdrawG = (clients, balances, client, amount) => {
     const index = clients.indexOf(client);
     if (amount > balances[index]) {
          return -1;
     }
     balances[index] -= amount;
     return balances[index];
};


//BAD
function withdrawB2(clients, balances, client, amount) {
     let indexOfTheElementClient = clients.indexOf(client);
     let result;
     if (clients.includes(client) && balances[clients.indexOf(client)] - amount > 0) {
       balances.splice(indexOfTheElementClient, 1, balances[indexOfTheElementClient] - amount);
       return result = balances[indexOfTheElementClient];
     }
     return -1;
   }

//GOOD
function withdrawG2(clients, balances, client, amount) {
     let clientIndex = clients.indexOf(client);

     if (balances[clientIndex] < amount) {
          return -1;
     }

     balances[clientIndex] -= amount;
     return balances[clientIndex];
}

//BAD
const withdrawB3 = (clients, balances, client, amount) => {
     const indexOfClient = clients.indexOf(client);
     const balanceOfClient = balances[indexOfClient];
     if (amount > balanceOfClient) {
       return -1;
     }
     return balanceOfClient - amount;
   };

//GOOD

const withdrawG3 = (clients, balances, client, amount) => {
     const indexOfClient = clients.indexOf(client);

     //Also good+++
     // if (amount > balances[indexOfClient]) {
     //   return -1;
     // }
     // return balances[indexOfClient] - amount;
     //Also good+++

     return amount > balances[indexOfClient] ? -1 : balances[indexOfClient] - amount;
   };


//BAD

function getRandomNumbers (number, start, end) {
     let resArr = [];
  
     if (Math.abs(end - start) < 1) {
     return null;
 }
     start = Math.ceil(start);
     end = Math.floor(end);
     
      for (let i = 0; i < number; i++) {
 
           if (start > 0 && end >0) {
                resArr.push(Math.floor(Math.random() * (end - start + 1)) + start);
           } else {
                resArr.push(Math.ceil(Math.random() * (end - start + 1)) + start);
           } 
           
      }
 
 return resArr;
 }

 //GOOD
 function getRandomNumbers (length, start, end) {
     if (Math.abs(end - start) < 1) {
          return null;
     }
     const max = Math.ceil(start);
     const min = Math.floor(end);

     return Array(length).fill().map(el => Math.floor(Math.random() * (max - min) + min));


}

var saw = 14;
