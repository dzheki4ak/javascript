/*урок 8. объекты: основы
Перебор свойств объектов
Создайте функцию, которая складывает все значения свойств объектов в массив

Основные требования:
Функция с именем concatProps должна принимать объект, как единственный аргумент
Функция должна достать все значения свойств объекта и сложить их в одну строку ({ name: 'John Doe', age: 17, interest: 'football' } => ['John Doe', 17, 'football'])
Для пустого объекта ф-ция должна вернуть пустой массив*/

function concatProps(object) {
     let array = [];
     for (let key in object) {
          array.push(object[key])
     }

     return array;
}