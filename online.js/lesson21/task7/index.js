/*
l урок 21. dom обновлена: 12 марта 2020 17:39
Очистка элемента
С помощью JavaScript найдите элемент на странице и удалите его
содержимое
Основные требования:
1. HTML находится в редакторе ниже
2. DOM элементы на странице ищите с помощью метода
document.querySelector

3. Напишите ф-цию clearList , которая должна найти на странице
элемент .categories и установить его содержимое как пустую
строку '' с помощью innerHTML
4. Как видите, это один из способов удалить содержимое элемента
5. Ф-ция должна быть в файле index.js и экспортироваться из него
под своим именем
*/
const clearList = () => {
     document.querySelector('.categories').innerHTML = '';
}
clearList();