/*урок 8. объекты: основы
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

function mergeObjectsV1(obj1, obj2) {
     return Object.assign({}, obj1, obj2)
}

function mergeObjectsV1(obj1, obj2) {
     return Object.assign({}, obj2, obj1);
}

function mergeObjectsV1(obj1, obj2) {
     return Object.assign({}, {...obj1}, {...obj2});
}

function mergeObjectsV1(obj1, obj2) {
     return Object.assign({}, {...obj2}, {...obj1});
}