/*
l урок 21. dom обновлена: 13 марта 2020 17:39
Получение содержимого
элемента
С помощью JavaScript найдите элемент на странице и получите его
содержимое
Основные требования:
1. HTML находится в редакторе ниже

2. DOM элементы на странице ищите с помощью метода
document.querySelector

3. Напишите ф-цию getTitle , которая найдет на странице элемент с
классом .title и вернет его текстовый контент с помощью
textContent

4. Напишите ф-цию getDescription , которая найдет на странице
элемент с классом .about и вернет его текстовый контент с
помощью innerText

5. Напишите ф-цию getPlans , которая найдет на странице элемент с
классом .plans и вернет его текстовый контент с помощью
innerHTML

6. Напишите ф-цию getGoal , которая найдет на странице элемент с
классом .goal и вернет его текстовый контент с помощью
outerHTML

7. Ф-ции должны быть в файле index.js и экспортироваться из него
под своими именами
*/
export const getTitle = () => document.querySelector('.title').textContent;

export const getDescription = () => document.querySelector('.about').innerText;

export const getPlans = () => document.querySelector('.plans').innerHTML;

export const getGoal = () => document.querySelector('.goal').outerHTML;
