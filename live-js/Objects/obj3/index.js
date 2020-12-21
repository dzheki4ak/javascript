'use strict';
/*
урок 9. объекты: keys, values, entries
обновлена: 20 декабря 2020 17:08
Объект в масив пользователей
Данные о пользователях храняться в виде объекта в формате

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    ...
};
Нужно написать функцию, которая такой объект преобразует в массив и отсортирует пользователей по возрасту от самого младшего до старшего

Основные требования:
Функция с именем getCustomersList должна принимать объект в заданом выше формате
Функция должна вернуть список пользователей в виде массива, отсортированного по возрасту по возрастанию
Элементы итогового массива должны включать поле id, значением которого является ключ из исходного объекта
[
    {
        name: 'Tom',
        age: 17,
        id: 'customer-id-2'
    },     
    {
        name: 'William',
        age: 54,
        id: 'customer-id-1'
    },
    ...
]
Исходный объект должен остаться неизменным
*/

const customers = {
     'customer-id-1': {
         name: 'William',
         age: 54
     },
     'customer-id-2': {
         name: 'Tom',
         age: 17
     },
 };

//in: obj
//out: array of objects

//algo:
//1. copy obj, and Get obj entries +++
//2. Use .map() obj method
//3. Sort out array;

//callabck
//in:
//ut:

const getCustomersListV1 = obj => {
     const entries = Object.entries(obj);
     console.log(entries);
     const resArray = entries.map(arr => {
          resObj = arr[1];
     console.log(arr);
     console.log(resObj);

     return { ...resObj, id: arr[0]}
     });
     console.log(resArray);
     const resArraySorted = resArray.sort((a, b) => {
          return a.age - b.age;
     })
     console.log(resArraySorted);

     return resArraySorted;
};

const getCustomersListV2 = obj => {
     return Object.entries(obj)
     .map(arr => {
          return { ...arr[1], id: arr[0] };
     })
     .sort((a, b) => {
          return a.age - b.age;
     });
};

const getCustomersListV3 = obj => {
     return Object.entries(obj)
     .map(arr => ({ ...arr[1], id: arr[0] }))
     .sort((a, b) => a.age - b.age);
};


   //test
   getCustomersListV3(customers);


