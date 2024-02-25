/* Arrow Functions and this operator */

// Define a user object with properties and a greet method
const user = {
  name: "Muhammad ibtasam",
  age: 30,
  greet: function () {
    // greet method logs a greeting message and current object context
    console.log("Hello, " + this.name); // this. -> refer to current context of object
    console.log(this);
  },
};

// Call the greet method of the user object
user.greet(); // Hello, Muhammad ibtasam
user.name = "Ali";
user.greet(); // Hello, Ali

// Log the global object ({} object in node.js and window object in browser)
console.log(this);

// Define functions to demonstrate the context of "this" inside a function
function thisContextInFunction() {
  // Log the context of "this" inside a function
  console.log(this);
}

thisContextInFunction(); // { ... } values in object

function thisInFunction() {
  let a = 10;
  // Attempt to access a property of "this" inside a function
  console.log(this.a); // undefined - this cannot be used in function
}

thisInFunction();

// Define expression functions to demonstrate the context of "this"
const thisContextInFnction1 = function () {
  // Log the context of "this" inside an expression function
  console.log(this);
};

thisContextInFnction1(); // { ... } values in object

const thisInFunction2 = function () {
  let a = 10;
  // Attempt to access a property of "this" inside an arrow function
  console.log(this.a); // undefined - this cannot be used in function
};

thisInFunction2();

/* Arrow Functions */

// Define an arrow function that attempts to access properties of "this"
const arrowFunction = () => {
  let userName = "Muhammad ibtasam";
  // Attempt to access properties of "this" inside an arrow function
  console.log(this.userName); // undefined - this cannot be used in arrow function
  console.log(this); // {}
};

arrowFunction(); // undefined - this cannot be used in arrow function

// Define arrow functions with explicit returns
const Add = (num1, num2) => {
  // Explicit return using return keyword
  return num1 + num2;
};

// Define arrow functions with implicit returns
console.log(Add(10, 20)); // 30

//  2 parameters
const Add1 = (num1, num2) => num1 + num2;
console.log(Add1(10, 20)); // 30

// 1 parameter
const AddOneToIt = (num1) => num1 + 1;
console.log(AddOneToIt(10)); // 11

// when use () no use of return keyword - USED IN REACT
// const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(10, 20)); // 30

// To return object from arrow function, use () to wrap the object
const returnObject = (name, age) => ({ name: name, age: age });
console.log(returnObject("Muhammad ibtasam", 30)); // { name: 'Muhammad ibtasam', age: 30 }

// Usage of arrow functions in forEach method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(() => {}); // arrow function - anonymous function
numbers.forEach(() => 1 + 2); // arrow function
numbers.forEach((num) => num + 1); // arrow function

// Simple function usage in forEach method
numbers.forEach(function () {});

/*

Key points:
Arrow functions are a concise way to define functions in JavaScript.
The value of "this" inside an arrow function is inherited from the surrounding lexical context and cannot be dynamically changed.
Arrow functions do not have their own "this" context, making them unsuitable for methods that require access to the object context.
Arrow functions have implicit returns when the function body consists of a single expression, without the need for the "return" keyword.
Arrow functions are commonly used in scenarios like array methods (forEach, map, filter, etc.) and callback functions, where concise syntax is preferred.

*/
