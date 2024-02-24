// Function : To conevert repeated task into a module and then call to use.
// reusabilty and readability

// 1. Function Declaration

// Named function
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Ibtasam");

// Adding two numbers

function add(a, b) {
  let sum = a + b;
  return sum;
  // return a + b;
}

let result = add(2, 3);
console.log(result);

// Parameters and Arguments in function

function logInUser(userName) {
  if (!userName) {
    console.log("Please provide username");
    return;
  }
  console.log(`User ${userName} logged in`);
}

logInUser("ibtasam");

// ECMA: Rest Parameters : ...args - convert to array [] - when we don't know how many arguments will be passed
// let suppose adding itmes to cart in shopping website. We don't know how many items will be added to cart.
// function sum(...args) {}

function sum(...num1) {
  console.log(num1);
  return num1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sum(1, 2, 3, 4)); // [1, 2, 3, 4]

// Passing object as a function argument

function greetUser(user) {
  console.log(`Hello, ${user.name} of age ${user.age}`);
}

const person = {
  name: "Ibtasam",
  age: 23,
};

greetUser(person);

// Passing array as a function argument
function reverseArray(arr) {
  return arr.reverse();
}
const myArr = [1, 2, 3, 4, 5];
console.log(reverseArray(myArr));
