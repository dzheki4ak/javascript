/*
урок 8. объекты: основы
Собрать объект
Есть два массива одинаковой размерности. Нужно создать объект на основе данных в этих массивах. В первом массиве - название ключей объекта, во втором - значение ключей под соответствующим индексом

Основные требования:
Ф-ция buildObject должна быть в файле index.js
buildObject принимает 2 аргумента: keysList - массив строк, valuesList - массив строк
Пример работы:
            const keys = ['name', 'address', 'age'];
            const values = ['Bob', 'Ukraine', 34];
            const result = buildObject(keys, values);
            // console.log(result); // { name: 'Bob', address: 'Ukraine', age: 56 }
        
В массивах может быть любое количество элементов. Важно, что длина из одинаковая
Для решения попробуйте использовать метод массива .reduce и вычислимые свойства объекта
Помните, что .reduce принимает не только 2 аргумента
Принимается решение и с обычным циклом for
*/
// Object.values();
// object.keys();

// in: array, array
// out: object

// algo:
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];

// step 1
// key = 'name' ==> {name: 'Bob'}

// step2
// key = 'address', {name: 'Bob'} ==> {name: 'Bob', address: 'Ukraine'}
function buildObject (keys, values ) {
     return keys.reduce((acc, key, index) => ({...acc, [key]: values[index] }), {});
}

