// simple Function - Named Function

function say() {
  console.log("Hello");
}

say(); // Hello

// Returning a value from a function

function Add(a, b) {
  return a + b;
}
Add(10, 20); // 30

function Hello() {
  let msg = "Hello, Muhammad ibtasam";
  return msg;
}

let message = Hello();
console.log(message); // Hello, Muhammad ibtasam
console.log(Hello()); // Hello, Muhammad ibtasam

// Nameless Function - Anonymous Function

let greet = function () {
  let msg = "Hello, Muhammad ibtasam";
  return msg;
};

console.log(greet()); // Hello, Muhammad ibtasam

// Arguments in function

let greet1 = function (name) {
  let msg = `Hello, ${name}`;
  return msg;
};

console.log(greet1("Muhammad ibtasam")); // Hello, Muhammad ibtasam

// Arrow Function
// Stops - Halts the code execution.
// API hit untill the response is not received, the code execution is halted.

// Syntax: const functionName = (parameters) => { code };
const greet2 = (name) => {
  let msg = `Hello, ${name}`;
  return msg;
};

console.log(greet2("Muhammad ibtasam")); // Hello, Muhammad ibtasam

// One liner arrow function - Implicit return - No need to use return keyword and {}
const greet3 = (name) => `Hello, ${name}`;
console.log(greet3("Muhammad ibtasam")); // Hello, Muhammad ibtasam
