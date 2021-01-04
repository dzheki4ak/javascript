const add10 = value => value + 10;
const mult5 = value => value * 5;
const div3 = value => value / 3;
const sqr2 = value => value ** 2;

export const compose = (...funcs) => value => funcs.reduce((acc, func) => func(acc), value);

const result = compose(add10, mult5, div3, sqr2);

console.log(result(8));