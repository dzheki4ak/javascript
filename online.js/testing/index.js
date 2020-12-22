// 'use strict';

/*
На складах, порядок. Роботи стоять без роботи. Проведемо інвентаризацію? Потрібно навчити роботів розрізняти коробки і  порахувати їх кількість. Коробки представлені у вигляді рядка aaabcda, де кожен символ, це коробка відповідного типу. Створи функцію countBoxes, яка буде приймати рядок коробок boxes і повертати об'єкт з кількістю відповідних коробок.

Приклад:

countBoxes('aabca') === {a: 3, b: 1, c: 1}
countBoxes('aaaaca31') === {a: 5, c: 1, 3: 1, 1: 1}
countBoxes('') === {}
*/
/*
 * @param {string} boxes
 *
 * @returns object
 */

const boxes = 'aaabcda';

function countBoxes(boxes) {
  let boxArr = boxes.split('');
  let boxRed = boxArr.filter((elem, index) => boxArr.indexOf(elem) === index);
  let obj = {...boxRed};

  console.log(boxArr);
  console.log(boxRed);
  console.log(obj);
}

countBoxes(boxes);

