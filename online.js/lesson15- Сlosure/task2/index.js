'use strict';
/*
урок 15. сlosure (замыкание)
обновлена: 11 декабря 2020 18:43
Фабрика калькуляторов с памятью
Создай ф-цию, которая будет возвращать калькуляторы с памятью

Основные требования:
Из файла index.js должна экспортироваться ф-ция с именем createCalculator
createCalculator должна вернуть объект с методами:
add - увеличивает число в памяти на то, что передано в аргументе
decrease - уменьшает число в памяти на то, что передано в аргументе
reset - сбрасывает память (устанавливать 0)
getMemo - возвращает число в памяти
В памяти по умолчанию должен храниться 0
Калькуляторы, созданные с помощью createCalculator должны быть независимы друг от друга (у каждого своя память)
Обязательно отлаживай и покрывай тестами свое решение перед отправкой на проверку
*/

export function createCalculator () {
     let memory = 0;
     let outObj = {};

  function add(number) {
     memory += number;
 };

  function decrease(number) {
     memory -=number;
 };

  function reset() {
     memory = 0;
 };

  function getMemo () {
      return memory;
 };
 outObj = {add, decrease, reset, getMemo}
 return outObj;
}