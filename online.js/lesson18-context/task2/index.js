'use strict';

/*
урок 18. контекст выполнения (this) - part 2
Заимствование метода
Опишите объект кошелька, который будет содержать информацию о транзакциях, и возможность возвращать максимальную и минимальную транзакцию

Основные требования:
Экспортируйте из файла объект с именем wallet
Объект wallet должен хранить массив транзакций в свойстве transactions
Метод getMax должен вернуть значение максимальной транзакции
Метод getMin должен вернуть значение минимальной транзакции
*/
export const wallet = {
     transactions: [10, 25, 118, 5, 17.5,],
     getMax() {
       return Math.max(...this.transactions);
     },
     getMin() {
       return Math.min(...this.transactions);
     },
   }