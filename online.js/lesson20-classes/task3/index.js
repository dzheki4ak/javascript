/*
l урок 20. клас… обновлена: 19 февраля 2020 20:25
Защищенные поля
Создайте кошелек с возможностью пополнения и снятия средств
Основные требования:
1. Класс должен экспортироваться под именем Wallet
2. Баланс кошелька по умолчанию равен 0
3. Метод getBalance должен вернуть текущий баланс
4. Метод deposit должен увеличивать баланс указанную сумму
5. Метод withdraw должен уменьшать баланс указанную сумму
6. При попытке снять больше средств, чем есть на счету - вывести
сообщение No enough funds в консоль прекратить выполнение
*/
export class Wallet {
     constructor() {
          this.balance = 0;
     }

     getBalance() {
          return this.balance;
     }

     deposit(depAmt) {
          this.balance += depAmt;
     }

     withdraw(withAmt) {
          if (withAmt > this.balance) {
               console.log(`No enough funds`);
               return;
          }
          this.balance -= withAmt;
     }

}