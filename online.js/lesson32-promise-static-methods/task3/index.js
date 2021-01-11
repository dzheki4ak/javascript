/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = val => Promise.resolve(val);
   
   /*
    * пример использования
    */
   makePromise(17).then(number => {
     console.log(number); // 17
   });
   