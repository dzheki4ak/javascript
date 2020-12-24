/*
l урок 19. прототип… обновлена: 16 мая 2020 12:24
Объект пользователя
Создайте объект пользователя
Основные требования:
1. Объект пользователя должен экспортироваться по умолчанию
2. В объекте пользователя хранятся свойства firstName и lastName
3. Getter fullName должен вернуть строку вида John Doe, где John - это свойство
firstName , а Doe - это свойство lastName
4. Setter fullName должен принять значение в формате John Doe, где John - это
свойство firstName , а Doe - это свойство lastName и сохранить значения в
соответствующие свойства объекта
*/
const user = {
     firstName: 'John',
     lastName: 'Doe',
     get fullName() {
          return `${this.firstName} ${this.lastName}`;
     },
     set fullName(value) {
          const [firstName, lastName] = value.split(' ');
          this.firstName = firstName;
          this.lastName = lastName;
     }
};

// user.fullName = 'Igor Kychak';
export default user;

console.log(user.firstName);
console.log(user.fullName);