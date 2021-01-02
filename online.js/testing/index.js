/* eslint-disable no-restricted-syntax */
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

/*------------------------------------------------------*/

/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names,
which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns
*/

const namesArr = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];

function list(names){
     const arr = names.map(obj => obj.name);
     let resStr = '';
     for (let i = 0; i < arr.length; i += 1) {
          if(arr.length <= 1) {
               resStr += arr[i];
               break;
          }
          if (arr.length - i > 2) {
               resStr += `${arr[i]}, `;
          } 
          if (arr.length - i === 2 ) {
               resStr += `${arr[i]} `
          } 
          if (arr.length - i < 2 ) {
               resStr += `& ${arr[i]}`
          }
          
     }
     return resStr;
}
list(namesArr);

/*------------------------------------------------------*/
/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const arrayDiffV2 = (a, b) => {
          const resArr = [];
          a.forEach(el => {
               if (!b.includes(el)) {
                    resArr.push(el);
               }
          })
     return resArr;
};

/*------------------------------------------------------*/

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the 

vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
     const vowels = 'aeiouAEIOU'.split('');
     const strArr = str.split('');
     const resArr = [];

     strArr.forEach(el => {
          if(!vowels.includes(el)) {
               resArr.push(el);
          }
     });
     
     return resArr.join('');
};

disemvowel("This website is for losers LOL!")
/*------------------------------------------------------*/
const isPalindrome = str => str.split('').reverse().join('') === str;
/*------------------------------------------------------*/

const descendingOrder = n => +(n.toString().split('').sort().reverse().join(''));
descendingOrder(42145);

/*------------------------------------------------------*/

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/

const positiveSum = arr => arr.filter(el => el > 0).reduce((acc, el) => acc + el, 0);

positiveSum([1,-4,7,12])
/*------------------------------------------------------*/
/*

A square of squares
You like building blocks.
You especially like building blocks that are squares. 
And what you even like more, is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. 
Instead, you end up with an ordinary rectangle! 
Those blasted things! If you just had a way to know, whether you're currently working in vain… 
Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer;
in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

*/

const isSquare = n => n < 0 || Math.sqrt(n).toString().split('').includes('.') ? false : true;


// const isSquareV2 = n => Number.isInteger(Math.sqrt(n));

/*------------------------------------------------------*/

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
const getCount = str => {
     let vowelsCount = 0;
     const vowels = 'aeiouAEIOU';
     str.split('').forEach(el => {
          if (vowels.includes(el)) {
               vowelsCount += 1
          }
     });     
     return vowelsCount;
   }
/*------------------------------------------------------*/

/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
const nmbrs = "1 9 3 4 -5";

const highAndLow = numbers => {
     const arr = numbers.split(' ');
     return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

highAndLow(nmbrs);
/*------------------------------------------------------*/
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution(c'ab', 'bc') // returns true
solution('abc', 'd') // returns false
*/
const solution = (str, ending) => str.slice(str.length - ending.length) === ending;

const solution2 = (str, ending) => str.endsWith(ending);

solution('abrakadabra', 'dafra');

/*------------------------------------------------------*/