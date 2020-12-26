/*
 урок 21. dom обновлена: 13 марта 2020 17:39
Установка дочерних элементов
С помощью JavaScript найдите элемент задайте ему дочерние элементы
Основные требования:
1. DOM элементы на странице ищите с помощью метода
document.querySelector

2. Напишите ф-цию setButton , которая принимает единственный
аргумент buttonText (строка)
3. setButton должна найти на странице элемент body и установит в
него строку '<button>button text</button>' , где button text - это
строка, полученная в аргументе ф-ции

4. Содержимое body устанавливайте с помощью innerHTML
5. Ф-ция должна быть в файле index.js и экспортироваться из него
под своим именем
6. Дополнительно. Попробуйте вставить ту же строку в body , но с
помощью textContent . Как видите, innerHTML создал HTML кнопку, а
textContent вставил текст "как есть"
*/

export const setButton = (string) => {
     document.querySelector('body').innerHTML = `<button>${string}</button>`;
}

