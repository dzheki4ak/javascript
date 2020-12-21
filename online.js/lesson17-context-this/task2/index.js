'use strict;'
/*
урок 17. контекст выполнения (this) - part 1
Привязка контекста
Создайте объект, который будет запрашивать у пользователя номер телефона для обратного звонка

Основные требования:
Экспортируйте из файла объект с именем callbackPrompt
Объект callbackPrompt должен хранить сообщение в свойстве message
Метод showPrompt должен содержать сообщение из свойства message и запросить у пользователя номер телефона, который потом выводит в консоль
Метод showDeferredPrompt должен вызывать метод showPrompt через указонное количество миллисекунд, переданное как единственный аргумент
*/
export const callbackPrompt = {
     message: 'Your number is...',
     showPrompt() {
       const phoneNumber = prompt(this.message);
       console.log(phoneNumber);
     },
     showDeferredPrompt(ms) {
       setTimeout(this.showPrompt.bind(this), ms);
     },
   };
   
