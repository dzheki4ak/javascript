const object = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

function copyObj(object) {
     let copyObj = {...object};
     return copyObj;
}

const copy = object => {return Object.assign({}, object);}
console.log(copy(object));

/*
урок 9. объекты
Копирование объекта
Создайте функцию, которая будет копировать объект

Основные требования:
Функция с именем copyObj должна принимать объект и возвращать его копию (первого уровня)
Исходный объект должен остаться неизменным
*/