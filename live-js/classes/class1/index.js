/* eslint-disable max-classes-per-file */

const name1 = 'John';
const style1 = 'breaststroke';

class Sportsman {
     constructor (name) {
          this.name = name;
     }

     // get name() {
     //      if(this.name.length < 3) {
     //           throw new Error('Invalid name')
     //      }

     //      return this._name;
     // }

     run() {
          console.log(`${this.name} is running`);
     }
};

class Swimmer extends Sportsman {
     constructor (name, style) {
          // lose context if super is not used
          super (name);
          this.style = style;
     }

     swim() {
          console.log(`${this.name} is swimming ${this.style}`);
     }

     // lose context due to setTimeout. This method will call our callback fn(swim) thru "window" object 
     testFunc() {
          setTimeout(this.swim, 3000);
     // the way to fix it:
          // const binded = this.swim.bind(this)
          // setTimeout(this.swim, 3000)
     // or to have swim func written as arrow function : 
          // swim =() => console.log(`${this.name} is swimming ${this.style}`);
     }
}




// testing

const sportsman = new Sportsman(name1);
console.log(sportsman);
sportsman.run();

const swimmer = new Swimmer(name1, style1);
console.log(swimmer);
swimmer.swim()

// lose context if we call method accessing it thru class (class isn`t object and can't be a context)
Swimmer.swim()

// lose context 
const swimFunc = swimmer.swim();
swimFunc();