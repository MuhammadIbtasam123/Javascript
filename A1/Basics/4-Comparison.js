/******************* Comparison Operators *********************** */

// loose comaprison: only compare value not data type
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// strict comparison: compare value and data type ( === , !==, >==, <==, >, <)
console.log(1 === 1); // true - value and data type are same
console.log(1 === "1"); // false - data type are not same
console.log(1 !== "1"); // true - data type are not same
