/*
урок 8. объекты: основы
Вычислимое свойство объекта - object computed property
Напишите 4 ф-ции, которые будут добавлять произвольное свойство в объект разным способом

Основные требования:
Все ф-ции должны быть в файле index.js
Все ф-ции принимают 3 аргумента: obj - объект, key - строка - название ключа, value - строка - значение свойства под этим ключом
Ф-ции должны добавить в объект свойство с ключом key и значением value
В ф-ции addPropertyV1 просто используйте квадратные скобки для добавления свойства объекта. Так вы измените исходный объект. Не забудьте вернуть из ф-ции измененный объект
В ф-ции addPropertyV2 используйте Object.assign. Так вы измените исходный объект. Не забудьте вернуть из ф-ции измененный объект
В ф-ции addPropertyV3 используйте Object.assign. Но используйте его так, чтобы исходный объект не изменился. Здесь по сути нужно создать новый объект и не мутировать старый. Не забудьте вернуть из ф-ции измененный объект
В ф-ции addPropertyV4 используйте оператор расширения (spread operator). Исходный объект должен остаться неизменным. Не забудьте вернуть из ф-ции измененный объект
Как видите, можно добавить свойство в исходный объект, а можно создать новый на основе старого и туда добавить еще одно свойство. На практике лучше не менять данные, которые приходят в аргументах ф-ции, а создать новые
Пример работы:
            const transaction = {
                value: 170
            }
            const result = addPropertyV1(user, 'currency', 'USD');
            // console.log(result); // { value: 170, currency: 'USD' }
*/

function addPropertyV1(obj, key, value) {
     obj[key] = value;

     return obj;
}

function addPropertyV2(obj, key, value) {

     obj = Object.assign(obj, {[key]:value})
     return obj;
}



function addPropertyV3(obj, key, value) {
     let newObj = {};
     newObj = Object.assign(newObj, obj, {[key]:value})
     return newObj; 
}

/*or*/

function addPropertyV3 (obj, key, value){
     return Object.assign({}, obj, {[key]:value});
     
   }



   

function addPropertyV4(obj, key, value) {
     let newObj = {...obj};
     newObj = Object.assign(newObj, {[key]:value})
     return newObj; 
}
/*or*/
 
 function addPropertyV4 (obj, key, value){
   return Object.assign({},{...obj}, {[key]:value});
 }