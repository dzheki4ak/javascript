/*
 урок 21. dom обновлена: 13 марта 2020 17:39
Поиск нескольких элементов на
странице
С помощью JavaScript найдите все элементы на странице, которые
удовлетворяют условие селектора
Основные требования:
1. HTML находится в редакторе ниже

2. DOM элементы на странице ищите с помощью метода
document.querySelectorAll

3. Напишите ф-цию getItemsList , которая найдет на странице все
элементы с классом .technology , выведет полученные элементы в
консоль с помощью console.dir(elementsList) и вернет список из фции

4. Напишите ф-цию getItemsArray , которая найдет на странице все
элементы с классом .tool , преобразует полученный список в
массив, выведет этот массив в консоль с помощью
console.dir(elementsArray) и вернет массив из ф-ции. Преобразуйте
полученный список ( NodeList ) в массив с помощь Array.from

5. Ф-ции должны быть в файле index.js и экспортироваться из него
под своими именами
*/

export function getItemsList() {
     const elementsList = document.querySelectorAll('.technology');
     console.dir(elementsList);
     return elementsList;
}
getItemsList();

export function getItemsArray() {
     const elementsArray = Array.from(document.querySelectorAll('.tool'));
     console.dir(elementsArray);
     return elementsArray;
}

getItemsArray();