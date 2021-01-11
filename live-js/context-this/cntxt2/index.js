function printMessage(country, city) {
  console.log(this);

  console.log(this.firstName);

  console.log(`Hello ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}
const user = {
  firstName: 'Ihor',
  age: 32,
};



// option 1 - using 'bind'

// printMessage('Ukraine', 'Dunayivtsi');

// .bind();
// in: context, arguments;
// out: function;

// const printMessagebinded = printMessage.bind(user, 'Germany', 'Berlin');

// 1
// printMessagebinded();

// 2
// printMessage.bind(user, 'Germany', 'Berlin')();

// 3
// const printMessagebinded = printMessage.bind(user, 'Germany')

// printMessagebinded('Berlin');

// 4 - MAX LOGIC
// const printMessagebinded = printMessage.bind(user)

// printMessagebinded('Germany', 'Berlin');

// 5 - SIMPLIFIED CODE
// console.dir(printMessage);
// const printMessagebinded = printMessage.bind(user)('Germany', 'Berlin');

// in: function, obj(context) arguments;
// out: function(with context attached);

// function myBind(func, context, ...args) {
//      return func.bind(context, ...args)
// };

// const printMessagebinded = myBind(printMessage, user);
// printMessagebinded('Germany', 'Berlin');

// option 2 using apply
/*
function myBind(func, context, ...arg) {
  return function (...other) {
    return func.call(context, ...arg, ...other);
  };
}

const printMessagebinded = myBind(printMessage, user);
printMessagebinded('Germany', 'Berlin');
*/
// option 3 using custom JS

// fixing context (adding ppty to a context object)
// bad practice - modifies in object
/*
user.printMessage = printMessage;
user.printMessage('Ukraine', 'Dunayivtsi');
*/

function myBind(func, context, ...arg) {
     return function (...params) {
          const copyContext = {...context};
          copyContext.tempFunc = func;
          copyContext.tempFunc(...arg, ...params);
     };
}
const printMessageBinded = myBind(printMessage, user);
printMessageBinded('Germany', 'Berlin');

