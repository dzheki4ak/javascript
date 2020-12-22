'use strict';
/*
objects
обновлена: 21 декабря 2020 11:27
Отметить всех администраторов
Задан массив пользователей и массив идентификаторов тех пользователей, которые являются администраторами. Нужно отметить всех администраторов

Основные требования:
Ф-ция должна называться markAdmins и находиться в файле index.js
markAdmins принимает массив пользователей в первом аргументе и массив идентификаторов во втором аргументе
Ф-ция markAdmins должна создать новый массив пользователей, у которых будет свойство isAdmin на основе идентификаторов из массива adminIds
markAdmins не должна изменить исходный массив пользователей
Пример работы функции смотри в редакторе

function markAdmins(usersList, adminIds) {
     // put your code here
   }
   
   // examples
   const adminIds = ['1', '3'];
   const users = [
     { id: '1', name: 'Bob' },
     { id: '2', name: 'Tom' },
     { id: '3', name: 'Sam' },
     { id: '4', name: 'Tad' },
   ];
   markAdmins(users, adminIds);
   */
// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];
//    const adminIds = ['1', '3'];
//    const usersList = [
//      { id: '1', name: 'Bob' },
//      { id: '2', name: 'Tom' },
//      { id: '3', name: 'Sam' },
//      { id: '4', name: 'Tad' },
//    ];

//in - array, array of objects
//out - array of objects
//algo
//1 - iterate an array of bject if element.id exists in adminIds
//2 - assign a new ppty to each object in array isAdmin: true/false

//    const markAdmins = (usersList, adminIds) => {
//      return usersList
//      .map(element => {if adminIds.includes(element.id)) 


//    markAdmins(usersList, adminIds);
//BAD
// const markAdmins = (usersList, adminIds) => {
//      usersList.map((element) => {
//           if (adminIds.includes(element.id)) {
//                element.isAdmin = true;
//           } else {
//                element.isAdmin = false;
//      }
//      })
//      return usersList;
//    }
//BETTER
// const markAdmins = (usersList, adminIds) => 
//     usersList.map(el => 
//         adminIds.includes(el.id) ? ({...el, isAdmin: true}) : ({...el, isAdmin: false}));


//BEST
const markAdminsV2 = (usersList, adminIds) => {
     return usersList.map(el => {
          let isAdmin = adminIds.includes(el.id);
          return {
               ...el,
               isAdmin
          };
     })
}