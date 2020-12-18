'use strict'
/*
урок 15. сlosure (замыкание)
Функция счетчик - пример замыкания
Создайте ф-цию, которая будет создавать независимые счетчики

Основные требования:
Функция должна называться makeCounter и экспортироваться под этим именем из файла
Вызов ф-ции makeCounter возвращает ф-цию счетчик. Счетчик возвращает инткремент на каждом вызове (начиная с 0).
Счетчики, созданные с помощью makeCounter должны быть независимы друг от друга
Пример работы:
            const counter1 = makeCounter();
            const counter2 = makeCounter();
            console.log(counter1()); // 0
            console.log(counter1()); // 1
            console.log(counter2()); // 0
            console.log(counter1()); // 2
            console.log(counter2()); // 1
        
Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте
*/

function makeCounter () {
    let count = 0;
    
    return function (){
        return count++;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());