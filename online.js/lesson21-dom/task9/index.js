/*
 урок 21. dom
Создание DOM элементов и
вставка на страницу - 2
С помощью JavaScript создайте недостающие элементы списка и
добавьте их на свои места, чтобы дополнить список
Основные требования:

1. Стартовый HTML находится в редакторе ниже
2. Напишите ф-цию finishList , которая должна создать и добавить в
список недостающие элементы
3. Используйте document.createElement для создания элементов списка

4. Текст в созданные элементы вставляйте с помощью textContent
5. Используйте методы append , prepend , before , after для вставки
элементов на страницу

6. После того, как ф-ция отработает, должен получиться список от 1
до 8.

7. Ф-ция должна быть в файле index.js и экспортироваться из него
под своим именем
*/

const finishList = () => {
     const listLength = 8;
     document.querySelector('ul').textContent = '';
     for (let i = 1; i <= listLength; i += 1) {
               const listItem = document.createElement('li');
               listItem.textContent = i;
               document.querySelector('ul').append(listItem);
     }
}

finishList()

