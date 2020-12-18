'use strict';
/*
урок 15. сlosure (замыкание)
обновлена: 22 мая 2020 17:34
Logger
Программист Петя во время написания своей программы столкнулся с необходимость отслеживать ее поведение. Для этого ему нужно выводить в консоль разные типы сообщений - warn (предупреждение об ошибке), error (ошибка), log (обычное сообщение), а так же получать историю этих сообщений

Помогите Пете и напишите ф-цию, которая будет создавать логгеры - они должны выполнять его задачу

Основные требования:
Из файла index.js должна экспортироваться ф-ция с именем createLogger
createLogger должна вернуть логгер (объект) с методами:
warn - принимает сообщение в виде строки и записывает его в память с типом warn
error - принимает сообщение в виде строки и записывает его в память с типом error
log - принимает сообщение в виде строки и записывает его в память с типом log
Пямять в этой задаче - это массив логеров (объектов)
Сообщения в памяти храним в формате { message: [сохраненное сообщение], dateTime: [время регистрации сообщения (используем new Date() - текущее время)], type: [тип записи] } где type - 'warn', 'error' или 'log'
Метод getRecords - принимает строку (тип сообщения) 'warn', 'error' или 'log' и возвращает сообщения этого типа в формате { message: [сохраненное сообщение], dateTime: [время регистрации сообщения], type: [тип записи] }. То есть этот метод должен работать с массивом логеров
getRecords возвращает все сообщения (всех типов), если аргумент не передан
getRecords должен вернуть сообщения в виде массива, отсортированному по времени по убыванию (самые новые сообщения в массиве идут первыми)
getRecords должен возвращать пустые массивы, если сообщений соответствующего типа не поступало
Логгеры, созданные с помощью createLogger должны быть независимы друг от друга (у каждого своя память)
Пример работы:
        const logger = createLogger();
        logger.log('User logged in');
        logger.warn('User try to restricted page');
        logger.log('User logged out');
        logger.error('Unexpected error on the site');
        logger.getRecords(); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
        logger.getRecords('log'); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
        logger.getRecords('error'); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
        logger.getRecords('warn'); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
        
Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте
*/
export function createLogger() {

     const memory = [];

function warn(message) {
          memory.push({
               message: message,
               type: 'warn',
               dateTime: new Date()
             });
     }

function error(message) {
          memory.push({
               message: message,
               type: 'error',
               dateTime: new Date()
             });
     }

function log(message) {
          memory.push({
               message: message,
               type: 'log',
               dateTime: new Date()
             });
     }

function getRecords(msg) {

          memory.sort((a, b) => b.dateTime - a.dateTime);

          if (msg === undefined) {
               return memory;
          } 
          
          return memory.filter(elem => elem.type === msg);
                    
     }
     
     return {warn, error, log, getRecords};
}

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
