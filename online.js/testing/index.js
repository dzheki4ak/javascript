const outArr = [];

for (let i = 0; i <= 100; i++) {
     if(i % 3 === 0 && i % 5 === 0) {
          outArr.push('FizzBuzz');
     }else if(i % 3 === 0) {
          outArr.push('Fizz')
     }else if(i % 5 === 0) {
          outArr.push('Buzz')
     }else {
          outArr.push(i)
     }
     
}
console.log(outArr);

function fibonacciGenerator (n) {
     const arr = [0, 1];
     for (let i = 2; i < n; i += 1){
       arr.push(arr[i - 2] + arr[i - 1])
     }
    return arr;
}
fibonacciGenerator (10);

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
 