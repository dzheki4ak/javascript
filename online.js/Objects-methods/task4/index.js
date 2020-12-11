/*
урок 9. объекты
Посчитать баланс по всем транзакциям
Задан массив транзакций. Нужно посчитать итоговую сумму транзакций

Основные требования:
Ф-ция должна называться getTotalRevenue и находиться в файле index.js
Пример работы
            const dayTransactions = [
                { userId: 22, amount: 60, operation: 'sell' },
                { userId: 22, amount: 160, operation: 'buy' },
                { userId: 44, amount: 90, operation: 'sell' },
            ];
            const result = getTotalBalance(dayTransactions);
            // result = 310
        
getTotalRevenue принимает массив транзакций в первом аргументе
getTotalRevenue должна вернуть число - сумму всех транзакций
*/

const dayTransactions = [
     { userId: 22, amount: 60, operation: 'sell' },
     { userId: 22, amount: 160, operation: 'buy' },
     { userId: 44, amount: 90, operation: 'sell' },
 ];

function getTotalRevenue (array) {
     let res1 = array.map(obj => Object.entries(obj));
     let res2 = res1.map(obj => obj[1]);
     let res3 = res2.map(obj => obj[1]);
     let finRes = res3.reduce((acc, balance) => acc + balance);

     console.log(res1);
     console.log(res2);
     console.log(res3);
     console.log(finRes);

     return finRes;
}
getTotalRevenue(dayTransactions);