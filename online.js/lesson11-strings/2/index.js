/*
урок 11. строки
Сортировка строк
Напишите ф-цию, которая будет сортировать список контактов в заданном направлении Основные требования:
Функция должна называться sortContacts
Функция должна принимать как первый аргумент массив контактов
Контакт - это объект вида { name: 'Tom', phoneNumber: '777-77-77' }
Второй аргумент - булевое значение направления сортировки (true - по возрастанию, false - по убыванию)
Функция должна вернуть отсортированный по имени абонента массив в нужном направлении (по убыванию или возрастанию)
По умолчанию сортировка должна происходить по возрастанию
Если передан не массив, то вернуть null
*/
const contArr = [
     { name: 'Tom', phoneNumber: '777-77-77' },
     { name: 'Ann', phoneNumber: '666-66-66' },
     { name: 'Zoe', phoneNumber: '555-55-55' },
     { name: 'Sam', phoneNumber: '444-44-44' }
];

function sortContacts (contArr, boolean) {
     let result = [];
     if (!Array(contArr)) {
          return null;
     } else if (boolean === true) {
          result = contArr.sort((el1, el2) => {
               return el1.name.localeCompare(el2.name);
          });
     } else {
          result = contArr.sort((el1, el2) => {
               return el2.name.localeCompare(el1.name);
               });
     }

     return result;
}

