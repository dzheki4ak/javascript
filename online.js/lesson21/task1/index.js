/*
l урок 21. dom обновлена: 22 декабря 2020 15:30
Todo List - отрисовка списка
Напиши код, который отрисует список дел
CSS , пример разметки и список задач для отображения находятся в
редакторе
Основные требования:
1. Дизайн в файле design.png
2. Список дел храним в виде массива в JavaScript
3. Задачи (элементы .list__item ) должны быть добавлены на
страницу с помощью JavaScript
4. Сам Todo List в этой задаче может оставаться статическим
*/
const tasks = [
     { text: 'Buy milk', done: false },
     { text: 'Pick up Tom from airport', done: false },
     { text: 'Visit party', done: false },
     { text: 'Visit doctor', done: true },
     { text: 'Buy meat', done: true },
   ];

   const renderListItems = listItems => {
     const listElem = document.querySelector('.list');

     const listItemElems = listItems
     .sort((a, b) => a.done - b.done)
     .map(({text, done}) => {
          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list__item');
          if (done) {
               listItemElem.classList.add('list__item_done');
          }
          const checkboxElem = document.createElement('input');
          checkboxElem.setAttribute('type', 'checkbox');
          checkboxElem.checked = done;
          checkboxElem.classList.add('list__item-checkbox');
          listItemElem.append(checkboxElem, text);

          return listItemElem;
     });

     listElem.append(...listItemElems);
   }

   renderListItems(tasks);