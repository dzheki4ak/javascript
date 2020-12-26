/*
l урок 21. dom обновлена: 12 декабря 2020 09:51
Установка атрибутов для DOM
элементов

С помощью JavaScript создай недостающие элементы формы
Основные требования:
1. Стартовый HTML находится в редакторе
2. Напиши ф-цию finishForm , которая должна дополнить логин
форму

3. finishForm должна вставить в начало формы инпут текстового
типа с name="login" . Используй append для ставки

4. finishForm должна изменить атрибут type с text на password для
нипута с паролем

5. После того, как ф-ция отработает, HTML должен измениться
следующим образом:

1<!-- index.html before -->
2<form class="login-form">
3<input type="text" name="password">
4 </form>


1 <!-- index.html after -->
2 <form class="login-form">
3  <input type="text" name="login">
4  <input type="password" name="password">
5 </form>

*/

const finishForm = () => {
     const textInput = document.createElement('input');
     textInput.setAttribute('type', 'text');
     textInput.setAttribute('name', 'login');
     document.querySelector('form').prepend(textInput);
     document.querySelector('[name = password]').setAttribute('type', 'password');

}
finishForm();