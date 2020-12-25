/* eslint-disable */

// hoisting example 1
console.log(message);
var message = 'Hoisting is here!';

var message;
console.log(message);
message = 'Hoisting is here!';

// hoisting example 2
var a = 55;
console.log(a);

if (a) {
  var a = 1;

  console.log(a);
}

console.log(a);

let a = 55;
console.log(a);

if (a) {
  let a = 1;

  console.log(a);
}

console.log(a);

// hoisting example 3
var a = 77;
console.log(a);

function print() {
  console.log(a);
  var a = 2;

}
print();

console.log(a);

var a;
a = 77;
// console.log(a);

function print() {
  var a;
  a = 2;
  console.log(a);
}
print();

console.log(a);

run()
function run() {
     console.log('RUN');
};

run2();
const run2 = function() {
     console.log('RUN2');
};

run3();
const run3 = () =>{
     console.log('run3');
}
// put your code here

function createLogger() {
  const logger = [];
  function warn(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "warn",
    });
  }

  function error(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "error",
    });
  }

  function log(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "log",
    });
  }

  function getRecords(type) {
    const sorted = logger.sort((a, b) => a.dateTime < b.dateTime);
    return type ? sorted.filter((item) => item.type === type) : sorted;
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogger();
logger1.error('a problem occured')
logger1.warn('error')
logger1.log('hello')

console.log(logger1.getRecords());
