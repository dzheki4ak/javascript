/*
l урок 21. dom обновлена: 03 мая 2020 10:51
Создание DOM элементов и
вставка на страницу
С помощью JavaScript создайте DOM элемент и добавьте его на
страницу

Основные требования:
1. Напишите ф-цию createButton , которая принимает единственный
аргумент buttonText (строка)
2. createButton должна создать DOM элемент button c помощью
document.createElement и вставить его в body с помощью append .
Текст кнопки передается в аргументе ф-ции createButton

3. Ф-ция должна быть в файле index.js и экспортироваться из него
под своим именем
4. Используйте textContent для назначения текста кнопке
5. Пример работы: createButton('Send Email') добавит
<button>Send Email</button> в тело документа
*/
const createButton = buttonText => {
  const button = document.createElement('button');
  button.textContent = buttonText;
  document.querySelector('body').append(button);
};
createButton('button');


