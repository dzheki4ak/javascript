/*
l урок 21. dom обновлена: 13 марта 2020 17:39
Установка содержимого элемента
С помощью JavaScript найдите элемент на странице и вставьте туда
текст
Основные требования:
1. HTML находится в редакторе ниже
2. DOM элементы на странице ищите с помощью метода
document.querySelector

3. Напишите ф-цию setTitle , которая принимает единственный
аргумент text (строка). setTitle должна найти на странице
элемент с классом .title и установит в него заданный текст
4. Текст вставляйте с помощью textContent
5. Ф-ции должны быть в файле index.js и экспортироваться из него
под своими именами
*/

export const setTitle =(text)=> {
     document.querySelector('.title').textContent = text;
}
setTitle('mamba');