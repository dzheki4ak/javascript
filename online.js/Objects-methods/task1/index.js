/*
урок 9. объекты
Методы работы с объектами
Создайте функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет

Основные требования:
Функция с именем getAdults должна принимать объект вида { 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, где ключ - имя человека, значение - его возраст
Функция должна вернуть массив всех людей, кто старше 18 лет включительно
Для пустого объекта ф-ция должна вернуть пустой массив
Пример работы: { 'John Doe': 19, 'Tom': 17, 'Bob': 18 } => ['John Doe', 'Bob']
*/

const object = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

function getAdults(object) {
     const entries = Object.entries(object);
     const filtered = entries.filter(array => array[1] >= 18);
     const names = filtered.map(name => name[0])

     return names;
}


const getAdults1 = object => Object.entries(object).filter(array => array[1] >= 18).map(name => name[0]);

console.log(getAdults1;