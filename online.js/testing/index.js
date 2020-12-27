/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const outArr = [];

for (let i = 0; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
          outArr.push('FizzBuzz');
     } else if (i % 3 === 0) {
          outArr.push('Fizz')
     } else if (i % 5 === 0) {
          outArr.push('Buzz')
     } else {
          outArr.push(i)
     }

}
// console.log(outArr);

function fibonacciGenerator(n) {
     const arr = [0, 1];
     for (let i = 2; i < n; i += 1) {
          arr.push(arr[i - 2] + arr[i - 1])
     }
     return arr;
}
fibonacciGenerator(10);

/*
Вночі у головного інженера зі столу хтось потягнув схему, за якою ми виготовляли наших роботів. 
Тепер ми не знаємо, які дані потрібні для робота, щоб він працював коректно. 
Пропоную зловити одного робота, що зараз прибирає у коридорі, підключитися до його терміналу і дізнатися, 
які поля нам потрібні для нових роботів. Створи функцію getRobotSchema, яка приймає об'єкт robot
 і повертає набір ключів і типи значень, які в них мають зберігатися. 
 Результат має виглядати ось так: [[key, type], [key, type]...]

Приклад:

  const robot = {
    version: 16,
    name: 'Cleaner 3000',
    coords: [345, 12],
  };

  getRobotSchema(robot) === [['version', 'number'], ['name', 'string'], ['coords', 'object']]
  */
const robot = {
     version: 16,
     name: 'Cleaner 3000',
     coords: [345, 12],
};

function getRobotSchema(object) {
     const entries = Object.entries(object);
     entries.map(el => el[1] = typeof el[1]);
     return entries;
}

getRobotSchema(robot);

/*
Ми удосконалили нашу програму для збору статистики з вебінарів Міші. 
Тепер після збору статистики, вона відправляє, 
дані на сервер у вигляді рядка 111001010111011, 
де 1 - це студент, що зрозумів тему, а 0 - відповідно, ні. 
Було б корисно розуміти скільки відсотків групи засвоїли матеріал, 
це покаже наскільки вебінар був ефективний. 
Створи функцію getSuccessRate котра буде приймати рядок statistic, 
та повертати відсоток студентів, які зрозуміли матеріал. 
Заокруглюй відсоток до найближчого цілого.

Приклади:

getSuccessRate('11100') === 60
getSuccessRate('1100') === 50
getSuccessRate('000000') === 0
getSuccessRate('11111') === 100
getSuccessRate('') === 0
*/
function getSuccessRate(statistic) {
     const statArr = statistic.split('');
     let zeros = 0;
     let ones = 0;
     const numArr = statArr.map(el => +el);
     numArr.forEach(el => {
          if (el === 0) {
               zeros += 1;
          }
          if (el === 1) {
               ones += 1;
          }
     })
     return Math.round(100 / (zeros + ones) * ones);
}
getSuccessRate('');

/*
getSuccessRateImproved ('11cool1-0ok0') === 60
getSuccessRateImproved ('whaaat11loveyoumisha0 + 0') === 50
getSuccessRateImproved ('00++++0one00one0') === 0
getSuccessRateImproved ('135ador11') === 100
*/

function getSuccessRateImproved(statistic) {
     let zeros = 0;
     let ones = 0;

     statistic
          .split('')
          .map(el => +el)
          .filter(el => !isNaN(el))
          .forEach(el => {
               el >= 1 ? ones += 1 : zeros += 1;
          });

     return Math.round(100 / (zeros + ones) * ones);
}
getSuccessRateImproved('whaaat11loveyoumisha0 + 0');

/*------------------------------------------------------*/

/*
Допиши функцію getDuplicates, котра повертатиме усі не унікальні
значення з масиву items.

Приклад:

getDuplicates([1, 2, 3, 3, 4, 5, 1, 6]) === [1, 3]
getDuplicates(['last', 'ball', 'game', 'last', 'game']) === ['last', 'game']
*/

const array = [1, 2, 3, 3, 4, 5, 1, 6]
// const array =  [0, 0, 0, 0]

const getDuplicates = items => [...new Set(items
     .filter((item, index) => items.indexOf(item) !== index))];

getDuplicates(array);

/*------------------------------------------------------*/

/*
Допиши функцію getUniqNames, 
котра повертатиме масив унікальних імен з масиву people.

Приклад:

const people = [
  {firstName: 'Eileen', lastName: 'Graham'},
  {firstName: 'Peter', lastName: 'Graham'},
  {firstName: 'Jared', lastName: 'Miller'},
  {firstName: 'Robert', lastName: 'Williams'},
  {firstName: 'Robert', lastName: 'Jolley'},
  {firstName: 'Robert', lastName: 'Graham'},
  {firstName: 'David', lastName: 'Jennings'},
];
getUniqNames(people) === [
  'Eileen', 'Peter', 'Jared', 'Robert', 'David'
]
*/
const pplArr = [{
          firstName: 'Eileen',
          lastName: 'Graham'
     },
     {
          firstName: 'Peter',
          lastName: 'Graham'
     },
     {
          firstName: 'Jared',
          lastName: 'Miller'
     },
     {
          firstName: 'Robert',
          lastName: 'Williams'
     },
     {
          firstName: 'Robert',
          lastName: 'Jolley'
     },
     {
          firstName: 'Robert',
          lastName: 'Graham'
     },
     {
          firstName: 'David',
          lastName: 'Jennings'
     },
];

const getUniqNames = people => [...new Set(people.map(obj => obj.firstName))];


getUniqNames(pplArr);
/*------------------------------------------------------*/
/*
Допиши функцію getPersistence, котра приймає не від'ємне число number,
 та повертає його мультиплікативну стійкість. 
 Щоб визначити мультиплікативну стійкість, 
 потрібно перемножати цифри даного числа між собою, 
 доки результат не міститиме тільки одну цифру.

Приклад:

getPersistence(39) === 3 (3*9 = 27, 2*7 = 14, 1*4 = 4)
getPersistence(1000) === 1 (1*0*0*0 = 0)
getPersistence(5389) === 2 (5*3*8*9 = 1080, 1*0*8*0 = 0)
getPersistence(4) === 0
*/

const input = 5389;
const getPersistence = number => {
     let count = 0;
     let num = number;

     while (num.toString().length > 1) {
          num = num.toString().split('').reduce((acc, el) => acc * el);
          count += 1;
     }
     return count;
}
getPersistence(input);

/*------------------------------------------------------*/
/*
Доповни функцію validate, котра приймає рядок password та повертає true якщо:

Є хоча б одна буква в верхньому регістрі;
Є хоча б одна буква в нижньому регістрі;
Є хоча б одна цифра;
Довжина паролю не менше 8-ми символів;
Пароль використовує тільки латинські літери та цифри.
Інакше повертає false.

Приклад:

validatePassword('password') === false
validatePassword('Admin12') === false
validatePassword('Admin123') === true
validatePassword('@dmiN122') === false
*/
'password'.charCodeAt()
'Admin12'.charCodeAt()
'Admin123'.charCodeAt()
'@dmiN122'.charCodeAt()
