/*
урок 16. hoisting (поднятие)
обновлена: 11 декабря 2020 10:29
var головоломка
Начальный код находиться в редакторе. Поправь объявления переменных так, чтобы код удовлетворял условия ниже

Основные требования:
В последней строчке в переменную foo должно попасть значение 1
Другой код, кроме обявления переменных должен остаться неизменным
Результат традиционно помести в файл index.js
Переменную foo экспортируй из файла по умолчанию
Не пиши такой код, как мы увидели в этом задании - это пример для разбора работы var ;) Keep it simple
*/
/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */



var foo = 1;

function bar() {
  if (!foo) {
    var foo = 10;
  }

  return foo;
}

var foo = bar(1);

