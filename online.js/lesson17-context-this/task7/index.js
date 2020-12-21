'use strict';
/*
урок 17. контекст выполнения (this) - part 1
обновлена: 06 апреля 2020 16:30
Полное имя
Опишите объект, который будет содержать информацию о пользователе и метод, что возвращает полное имя пользователя

Основные требования:
Экспортируйте из файла объект с именем user
Объект user должен хранить имя в свойстве firstName и фамилию в свойстве lastName
Метод объекта getFullName должен вернуть полное имя пользователя в формате John Doe, где John - имя, Doe - фамилия
Метод объекта setFullName должен принимать полное имя пользователя в формате John Doe, где John - имя, Doe - фамилия, и сохранять отдельно имя и фамилию в поля объекта
*/
export const user = {
     firstName: 'John',
     lastName: 'Doe',
     getFullName () {
          return `${this.firstName} ${this.lastName}`;
     },
     setFullName (wholeName) {
          let nameArr = wholeName.split(' ');
          this.firstName = nameArr[0];
          this.lastName = nameArr[1];
     }
};