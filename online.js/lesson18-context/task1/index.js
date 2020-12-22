'use strict';
/*
урок 18. контекст выполнения (this) - part 2
обновлена: 25 ноября 2019 15:30
This в callback
Отобразите предстоящий праздник в виде объекта, который может разослать приглашения всем гостям

Основные требования:
Экспортируйте из файла объект с именем event
Объект event должен хранить имя в свойстве message текст приглашения
Объект event должен хранить список гостей в свойстве guests в формате { name: 'John', age: 18, email: 'example@server.com' }
Метод объекта getInvitations должен вернуть приглашения для всех гостей, достигших 18 лет в формате { email: 'user-email', message: 'Dear John! Welcome to the party!' }, где John - имя, Welcome to the party! - сообщение, которое храниться в поле message
*/
export const event = {
     message: 'Welcome to the party!',
     guests: 
     [
          { name: 'John', age: 18, email: '18@server.com' },
          { name: 'Mike', age: 23, email: '23@server.com' },
          { name: 'Small', age: 17, email: '17@server.com' },
     ],
     getInvitations () {
          return this.guests
          .filter(({ age }) => age >= 18)
          .map(({ name, email }) => ({
            email, 
            message: `Dear ${name}! ${this.message}`,
          }));
     }
}
