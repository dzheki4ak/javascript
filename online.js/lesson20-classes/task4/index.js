/*
Order класс
Представьте что вы разрабатываете ресурс, где люди могут делать
заказы в интернет магазине. Для такого ресурса нужно будет создать
сущность (класс) Order, которая будет отображать и хранить данные о
заказах. Создайте этот класс и добавьте в него следующее.
Основные требования:
1. Создать класс Order c полями
id - string - генерируется при создании экземполяра
класса (можно использовать Math.random() приведенный к
строке)
price - number - цена заказа
dateCreated - Date - время создания заказа
isConfirmed - bool - заказ подтвержден / не подтвержден
dateConfirmed - Date - дата подтверждения заказа
city - string - место проведения заказа
type - string - тип заказа
2. Конструктор должен принимать нужные параметры - рпсе, city, type. ID проставляется рандомный. По—умолнаний заказ не подтвержден
3. Создать методы ниже
4. checkPrIce - должен возвращать true если сумма закака больше 1000 и false B другом случае
5. conﬁrmorder - должен проставлять ордер в статус conﬁrmed = true [если заказ не был подтвержден раньше) и дату конфирма ставить в текущую
6. isVaIrdType - type none может принимать только два значения - Buy, Sell - метод возвращает true если это требование выполняется и false если нет
*/

class Order {
     constructor(price, city, type) {
          this.id = Math.round(Math.random() * (100000 - 1) + 1).toString();
          this.price = price;
          this.dateCreated = new Date() 
          this.isConfirmed = false; 
          this.dateConfirmed = new Date() 
          this.city = city;
          this.type = type;
     }

     checkPrice() {
          if (this.price > 1000) {
               return true;
          }
          return false;
     }

     confirmOrder() {
          this.isConfirmed = new Date();
          this.isConfirmed = true;
     }

     isValidType() {
          if(this.type === 'Buy' || this.type === 'Sell') {
               return true;
          }
          return false;
     }
}

const order1 = new Order(1000, 'Kyiv', 'Sell');

