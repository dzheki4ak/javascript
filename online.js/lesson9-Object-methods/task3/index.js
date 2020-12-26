/*
l

урок 9. объекты
обновлена: 03 марта 2020 17:08
Объект в массив жителей
Данные о жителях дома храняться в виде объекта в формате

    rooms = {
        room1: [
            { name: 'room1 name1' },
            { name: 'room1 name2' },
            { name: 'room1 name3' },
            { name: 'room1 name4' },
            ...
        ],
        room2: [
            { name: 'room2 name1' },
            ...
        ],
        room3: [
            { name: 'room3 name1' },
            { name: 'room3 name2' },
            { name: 'room3 name3' },
            ...
        ],
        ...
    };
Нужно написать функцию, которая такой объект преобразует в массив имен жителей

Основные требования:
Функция с именем getPeople должна принимать объект в заданом выше формате
Функция должна вернуть список имен пользователей в виде массива (плоский массив строк ['room1 name1', 'room1 name2', ... 'room2 name1', 'room3 name1', ...]).
Количество комнат и количество людей в комнате может быть любым.
Пользуйтесь разнообразием методов массивов и объектов. Обычный цикл for для решения этой задачи подходит не лучшим образом.
1
*/

const rooms = {
     room1: [
         { name: 'room1 name1' },
         { name: 'room1 name2' },
         { name: 'room1 name3' },
         { name: 'room1 name4' }
     ],
     room2: 
     [{ name: 'room2 name1' }],
     room3: 
     [
         { name: 'room3 name1' },
         { name: 'room3 name2' },
         { name: 'room3 name3' },
     ],
 };



function getPeople (rooms) {
     let arrays = Object.entries(rooms);
     let arrays2 = arrays.map(array => array[1]);
     let arrays3 = arrays2.flat();
     let arrays4 = arrays3.map(arr => Object.values(arr));
     let result = arrays4.flat();

     // console.log(arrays);
     // console.log(arrays2);
     // console.log(arrays3);
     // console.log(arrays4);
     // console.log(result);

     return result;
}
getPeople(rooms);
