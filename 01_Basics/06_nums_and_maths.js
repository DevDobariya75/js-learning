const score = 40

const balance = new Number(100)
console.log(balance);

// number to stirng --> toString() method

console.log(balance.toFixed(2))

const otherNumber = 123.8996

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));

// ceil()
// floor()
// min()
// max()
// random() --> b/w 0 - 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
