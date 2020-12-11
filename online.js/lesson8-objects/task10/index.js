/*урок 8. объекты: основы
Сравнить 2 объекта
Напишите ф-цию, которая сравнит содержимое 2-х объектов

Основные требования:
Ф-ция compareObjects должна быть в файле index.js
compareObjects принимает 2 аргумента: obj1 - объект, obj2 - объект
Ф-ция должна вернуть true, если объекты равны или false, если не равны
Объекты, которые сравниваются значениями свойств могут иметь только примитивные типы данных
Объекты должны сравниваться не по ссылке, а по содержанию
Объекты равны, если у них одинаковый набор ключей, и одинаковые значения у соответствующих ключей
Пример работы:
            const obj1 = {
                name: 'Tom'
                age: 17
            };
            const obj2 = {
                name: 'Bob'
                age: 17
            };
            const obj3 = {
                name: 'Bob'
                age: 17,
                student: false
            };
            const obj4 = {
                name: 'Tom'
                age: 17,
            };
            compareObjects(obj1, obj2); // false
            compareObjects(obj2, obj3); // false
            compareObjects(obj1, obj4); // true
*/