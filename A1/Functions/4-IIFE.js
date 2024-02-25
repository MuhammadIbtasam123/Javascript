/* 
IIFE - Immediately Invoked Function Expression

1- IIFE is a function that runs as soon as it is defined.
2- A file where we need a database connection as soon as server starts, IIFE is used.
3- IIFE is used to avoid polluting the global scope, means when we don't want that the 
variables of global scope interfere with the variables of function scope.

Syntax:
()();

The first pair is for function declaration and the second pair is for calling the function.
If we need to use more than one IIFE, we can use the following syntax:
*Note : (; must used after every IIFE to avoid any error)
()();
()();
*/

// Simple IIFE
(() => {
  console.log("Database connection established");
})();

// Named IIFE
(function databaseConnection() {
  console.log("Database connection established");
})();

// IIFE with parameters
(function (username) {
  console.log(`Welcome ${username}`);
})("Muhammad ibtasam");

// IIFE with return value
const result = (function (num1, num2) {
  return num1 + num2;
})(10, 20);
console.log(result); // 30
