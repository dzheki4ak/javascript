/*
l урок 19. прототип…
Перебор собственных свойств объекта (for..in)
Напишите функцию, которая будет находить все собственные свойства объекта
Основные требования:
1. Функция должна экспортироваться под именем getOwnProps
2. Функция должна принимать объект, как единственный аргумент и вернуть массив
собственных свойств объекта. Методы в результат попасть не должны
*/
const object = {
     name: 'Argo',
     move() {
          console.log(`${this.name} is moving`)
     },
     stop() {
          console.log(`${this.name} stopped`);
     },
}

export function getOwnProps(object) {
     let resArr = []
     for (let prop in object) {
          if(object.hasOwnProperty(prop) && typeof object[prop] !== 'function') {
               resArr.push(prop);
          }
     }
     return resArr;
}