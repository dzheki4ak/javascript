/*
l урок 21. dom обновлена: 13 марта 2020 17:39
Поиск элемента на странице
С помощью JavaScript найдите элемент на странице
Основные требования:
1. HTML находится в редакторе ниже
2. DOM элементы на странице ищите с помощью метода
document.querySelector
3. Напишите ф-цию getTitleElement , которая найдет на странице
элемент с классом .title , выведет найденый элемент в консоль с
помощью console.dir(titleElem) и вернет его

4. Напишите ф-цию getInputElement , которая найдет на странице input
c типом text выведет найденый элемент в консоль с помощью
console.dir(inputElem) и вернет его

5. Ф-ции должны быть в файле index.js и экспортироваться из него
под своими именами
*/

export function getTitleElement() {
     const titleElem = document.querySelector('.title');
     console.dir(titleElem);
     return titleElem;
}

getTitleElement();

export function getInputElement() {
     const inputElem = document.querySelector('input', '[type = text]');
     console.dir(inputElem);
     return inputElem;
}

getInputElement();