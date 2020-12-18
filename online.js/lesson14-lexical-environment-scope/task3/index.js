'use strict';

/*
урок 14. lexical environment, scope (скоуп)
Калькулятор с памятью
Создайте ф-ции, которые будут изменять число и запоминать результат

Основные требования:
В памяти по умолчанию должен храниться 0
Функция с именем add должна принимать число и суммировать его с тем, что в памяти
Функция с именем decrease должна принимать число и отнять его от того, что в памяти
Функция с именем reset должна сбрасывать память (устанавливать 0)
Функция с именем getMemo должна вернуть число в памяти
Функции add, decrease, reset, getMemo должны экспортироваться под своими именами из файла index.js
*/
let memory = 0;

 export function add(number) {
     memory += number;
 };

 export function decrease(number) {
     memory -=number;
 };

 export function reset() {
     memory = 0;
 };

 export function getMemo () {
      return memory;
 };