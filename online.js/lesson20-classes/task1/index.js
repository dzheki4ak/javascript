/*
 урок 20. клас… обновлена: 01 мая 2020 16:24
Конструктор объектов
Напишите конструктор, который будет создавать пользователей с
определенными возможностями
Основные требования:
1. Для решения этой задачи используйте классы
2. Конструктор должен экспортироваться под именем User
3. User должен принимать и сохранять name и age при создании
объекта
4. На прототипе User должен иметь метод sayHi , который выводит в
консоль текст Hi, I am John, где John - свойство name объекта
5. На прототипе User должен иметь метод requestNewPhoto , который
выводит в консоль текст New photo request was sent for John, где
John - свойство name объекта
6. На прототипе User должен иметь метод setAge , который установит
новое значение свойству age и выведет в консоль текст New
photo request was sent for John, где John - свойство name
объекта, если новый возраст больше или равен 25
7. Метод setAge должен вернуть false и прекратить выполнение,
если переданное значение меньше нуля
8. Метод setAge должен вернуть переданное значение, если
переданное значение не меньше нуля
9. Статический метод createEmpty должен создавать юзера с пустыми
полями ( name - пустая строка, age - null )
*/

export class User {
     constructor (name, age) {
          this.name = name;
          this.age = age; 
     }

     sayHi() {
          console.log(`Hi, I am ${this.name}`);
     }

     requestNewPhoto() {
          console.log(`New photo request was sent for ${this.name}`);
     }

     setAge(newAge) {
          if (newAge < 0) {
               return false;
          }
          this.age = newAge;
          if (newAge >= 25) {
               this.requestNewPhoto();
          }
          return newAge;
     }

     static createEmpty() {
          const blankUser = {
               name: '',
               age: null, 
           }

          return blankUser;
     }
}

const user1 = new User('Ihor', 32);
user1.setAge(0);
