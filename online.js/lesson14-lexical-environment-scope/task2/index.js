/*
урок 14. lexical environment, scope (скоуп)
обновлена: 16 мая 2020 20:02
Вложенные функции
Создайте ф-цию, которая будет создавать независимые счетчики

Основные требования:
Файл должен содежать ф-цию createMessenger, которая создает объект с 3-мя методами:
sendMessage - принимает имя и выводит в консоль сообщение в формате 'Bob, Just learn it! Your Gromcode', где 'Bob' - введенное имя
setMessage - принимает текст, который дальше метод sendMessage будет использовать в результате вывода в консоль 'Bob, Good job! Your Gromcode' (setMessage установила текст, выделенный жирным)
setSender - принимает текст, который дальше метод sendMessage будет использовать в результате вывода в консоль 'Bob, Just learn it! Your Gromcode' (setSender устанавила текст, выделенный жирным)
createMessenger должен экспортироваться из файла по умолчанию. Если ф-ция createMessenger - стрелочная, то сперва объявите ее, а потом экспортируйте по умолчанию:
        const createMessenger = () => { ... };
        export default createMessenger;
    
Ф-цию, объявленную с помощью ключевого слова function экспортировать можно сразу:
        export default function createMessenger() { ... };
    
Созданные с помощью ф-ции createMessenger месседжеры должны быть независимы друг от друга
*/
function createMessenger() {
     let message = 'Just learn it';
     let sender = 'Gromcode';
  
    function sendMessage(name) {
      console.log(`${name}, ${message}! Your ${sender}`);
    }
  
    function setMessage(msg) {
      message = msg;
    }
  
    function setSender(someName) {
      sender = someName;
    }
  
    return { 
      sendMessage,
      setMessage,
      setSender,
    };
  };
  export default createMessenger;