/*урок 8. объекты: основы
Объект. Назначение свойств объекта
Задан объект. Назначьте ему свойства

Основные требования:
Начальный код задан в редакторе ниже
Назначьте объекту user свойства, указанные в комментариях
Важно, чтобы в файле был только один console.log в конце файла*/

const user = {
     name: 'Tom',
     age: 17,
   };
   
   /* присвойте объекту свойство hobby со значением 'football' с помощью точки */

   user.hobby = 'football';
      
   /* название свойства хранится в переменной anotherKey. Присвойте объекту такое свойство со значением false */
   const anotherKey = 'married';
   user[anotherKey] = false;

   /* присвойте объекту свойство 'favorite music' со значением 'rock' */

   user['favorite music'] = 'rock';

   /* присвойте объекту свойство 'address', которое будет пустым объкетом */
   
   user.address = {};
   /* присвойте объекту в 'address' свойство 'country', со значением 'Ukraine' */
   user.address.country = 'Ukraine';
   /* присвойте объекту в 'address' свойство 'building', со значением 17 */
   user.address.building = 17;
   /* выведите в консоль объект user */

   console.log(user);