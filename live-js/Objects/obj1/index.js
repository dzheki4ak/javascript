'use strict';
/*
урок 8. объекты: основы
Merge objects
Напишите 4 ф-ции, которые будут мержить (сливать) один объединять с другим

Основные требования:
Все ф-ции должны быть в файле index.js
Все ф-ции принимают 2 аргумента: obj1 - объект, obj2 - объект
Ф-ции должны создать один объект, в котором будут все свойства из первого и второго объекта
Ф-ция mergeObjectsV1 должна слить объекты так, что в приоритете должны быть свойства из ВТОРОГО объекта. То есть, если в obj1 и obj2 есть свойства с одинаковыми ключами, то в результат должно попасть свойство из obj2. Используйте Object.assign для слияния объектов
Ф-ция mergeObjectsV2 должна слить объекты так, что в приоритете должны быть свойства из ПЕРВОГО объекта. То есть, если в obj1 и obj2 есть свойства с одинаковыми ключами, то в результат должно попасть свойство из obj1. Используйте Object.assign для слияния объектов
Ф-ция mergeObjectsV3 должна слить объекты так, что в приоритете должны быть свойства из ВТОРОГО объекта. То есть, если в obj1 и obj2 есть свойства с одинаковыми ключами, то в результат должно попасть свойство из obj2. Используйте spread operator для слияния объектов
Ф-ция mergeObjectsV4 должна слить объекты так, что в приоритете должны быть свойства из ПЕРВОГО объекта. То есть, если в obj1 и obj2 есть свойства с одинаковыми ключами, то в результат должно попасть свойство из obj1. Используйте spread operator для слияния объектов
В любом случае объекты obj1 и obj2 должны остаться неизменными
Все ф-ции должны вернуть итоговый объект
Пример работы:
            const obj1 = {
                name: 'Tom'
                age: 17
            };
            const obj2 = {
                name: 'Bob'
                student: false
            };
            mergeObjectsV1(obj1, obj2);
            // { name: 'Bob', age: 17, student: false }
            mergeObjectsV2(obj1, obj2);
            // { name: 'Tom', age: 17, student: false }
            mergeObjectsV3(obj1, obj2);
            // { name: 'Bob', age: 17, student: false }
            mergeObjectsV4(obj1, obj2);
            // { name: 'Tom', age: 17, student: false }
*/

//in: obj, obj
//out: obj
const mergeObjectsV1 = (obj1, obj2) => {
     return Object.assign({}, obj1, obj2)
};

//in: obj, obj
//out: obj
const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);


mergeObjectsV2({name: 'Tom', age: 17},
 {name: 'Bob', student: false}
 );


 function mergeObjectsV3(obj1, obj2) {
     return {...obj1, ...obj2};
}

const mergeObjectsV4 = (obj1, obj2) => {
     return {...obj2, ...obj1};
};

/*************************/
/*
урок 8. объекты: основы
обновлена: 14 декабря 2020 08:52
Добавление свойства в объект
Напиши 4 ф-ции, которые будут добавлять свойство в объект разным способом

Основные требования:
Все ф-ции должны быть в файле index.js
Все ф-ции принимают 2 аргумента: userData - объект пользователя и userId - строка - идентификатор пользователя
Ф-ции должны добавить в объект пользователя свойство id со значением из второго аргумента ф-ции (userId)
В ф-ции addPropertyV1 просто используй оператор "точка" для добавления свойства объекта. Так ты изменишь исходный объект. Не забудь вернуть из ф-ции измененный объект
В ф-ции addPropertyV2 используй Object.assign. Так ты изменишь исходный объект. Не забудь вернуть из ф-ции измененный объект
В ф-ции addPropertyV3 используй Object.assign. Но используй его так, чтобы исходный объект не изменился. Здесь по сути нужно создать новый объект и не мутировать старый. Не забудь вернуть из ф-ции измененный объект
В ф-ции addPropertyV4 используй оператор расширения (spread operator). Исходный объект должен остаться неизменным. Не забудь вернуть из ф-ции измененный объект
Как видишь, можно добавить свойство в исходный объект, а можно создать новый на основе старого и туда добавить еще одно свойство. На практике лучше не менять данные, которые приходят в аргументах ф-ции, а создать новые
Смотри пример работы функции в редакторе
*/

function addPropertyV1(userData, userId) {
     userData.Id = userId;
     return userData;
}
function addPropertyV2(userData, userId) {
     userData = Object.assign(userData, {id: userId})
     return userData;
}
function addPropertyV3(userData, userId) {
     userData = Object.assign({},userData, {id: userId})
     return userData;
}

//Ideal case below!!!
function addPropertyV4(userData, userId) {
     userData = {...userData, id: userId};
     return userData;
}
// Object.keys, values, entries, ...obj