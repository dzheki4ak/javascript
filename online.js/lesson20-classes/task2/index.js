/* eslint-disable max-classes-per-file */
/*
l урок 20. клас… обновлена: 26 ноября 2019 20:25
Корабль
Создайте корабль, который унаследует некоторое поведение средства
передвижения
Основные требования:
1. Экспортируйте из файла 2 класса с именами Vehicle и Ship
2. Vehicle должен хранить свойства name и numberOfWheels
3. Vehicle должен иметь метод move , который выводит в консоль
текст Argo is moving, где Argo - это свойство name объекта
4. Vehicle должен иметь метод stop , который выводит в консоль
текст Argo stopped, где Argo - это свойство name объекта
5. Ship должен наследоваться от Vehicle
6. Конструктор Ship принимает 3 аргумента
name, numberOfWheels, maxSpeed
7. Ship должен иметь метод move , который выводит в консоль текст
Argo lifting anchor up, где Argo - это свойство name объекта, а
затем вызывает метод move наследованный от Vehicle
8. Ship должен иметь метод stop , который вызывает метод stop
наследованный от Vehicle , а затем выводит в консоль текст Argo
lifting anchor down, где Argo - это свойство name объекта
*/


class Vehicle {
     constructor(name, numberOfWheels) {
          this.name = name;
          this.numberOfWheels = numberOfWheels;
     }

     move() {
          console.log(`${this.name} is moving`);
     }

     stop() {
          console.log(`${this.name} stopped`);
     }
};




class Ship extends Vehicle {
     constructor (name, numberOfWheels, maxSpeed) {
          super(name, numberOfWheels);
          this.speed = maxSpeed;
     }

     move() {
          console.log(`${this.name} lifting anchor up`);
          super.move();
     }

     stop() {
          super.stop();
          console.log(`${this.name} lifting anchor down`);
     }
}