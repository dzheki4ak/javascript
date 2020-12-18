/*
урок 14. lexical environment, scope (скоуп)
обновлена: 02 июня 2020 20:02
Лексическое окружение
Создайте ф-цию, которая будет строить сообщение с возможностью задавать часть сообщения.

Основные требования:
Файл должен содержать ф-цию sendMessage, которая принимает аргументом имя и выводит в консоль сообщение (Пример работы: sendMessage('Ann') => 'Ann, Just learn it! Your Gromcode')
Файл должен содержать ф-цию setMessage, которая принимает аргументом новый текст сообщения. После установки нового сообщения, ф-ция sendMessage('Ann') должна выводить уже обновленный текст (Пример работы: setMessage('Good job') => sendMessage('Ann') => 'Ann, Good job! Your Gromcode')
Обратите внимание, что восклицательный знак - это НЕ часть сообщения, которое устанавливается через ф-цию setMessage
На проверку закидывайте решение БЕЗ тестовых вызовов функций
*/

let message = 'Just learn it';

export function sendMessage (name) {
     const sender = 'Gromcode';
     console.log(`${name}, ${message}! Your ${sender}`);
   };

export function setMessage (text) {
     message = text;
}



