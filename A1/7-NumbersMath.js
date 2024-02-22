/* Numbers */
const score = 100;
console.log(score); // 100

const balance = new Number(100); // Number {100}
console.log(typeof score); // number

// convert number to string : All string methods can be used afterwards
console.log(score.toString()); // 100
console.log(score.toString().length); // 100

// fixed() - how many decimal points to show
const price = 10.123456789;
console.log(price.toFixed(2)); // 10.12

// toLocaleString('en-IN') Readable large numbers - format
const hundred = 1000000;
console.log(hundred.toLocaleString()); // 1,000,000 - US format
console.log(hundred.toLocaleString("en-IN")); // 10,00,000 - Indian format

/* Math */
console.log(Math); // Math { E: 2.718281828459045, PI: 3.141592653589793, ... }
console.log(Math.PI); // 3.141592653589793

// absolute value
console.log(Math.abs(-100)); // 100

// power
console.log(Math.pow(2, 3)); // 8

// Round : round to nearest integer (.5 =< round up, .5 > round down)
console.log(Math.round(2.4)); // 2

// Ceil : always round up
console.log(Math.ceil(2.1)); // 3

// Floor : always round down
console.log(Math.floor(2.9)); // 2

// min and max
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// random : random number between 0 and 1
console.log(Math.random()); // between 0 and 1
console.log(Math.random() * 10 + 1); // between 1 and 10 - 1 is added to make it between 1 and 10 else it will be between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // floor - round down - between 1 and 10

// if we want to generate random number between min and max number
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // between 10 and 20
