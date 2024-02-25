/* 
Global scope and Block Scope:
1- Anything outisde {} is global scope and inside is block scope.
2- If..else {}, for(){}

KEY POINT:
1- Any variable declare/initalized inside {} must remian to that block not accessible outside that block.
2- Any variable declare/initalized outside {} can be accessible inside {} .
*/
// here I initailased/declare variable let, const, var inside {}.
// let const can't able to access it outside it but var can be accessible.
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
// console.log(a);
// console.log(b);
// console.log(c);

// here I initailased/declare variable let, const, var outside {}.
// let const var can be accessible inside {}.
var a1 = 10;
let b1 = 20;
const c1 = 30;
console.log(a1);
console.log(b1);
console.log(c1);
{
  console.log(a1);
  console.log(b1);
  console.log(c1);
}

// here I initailased/declare variable let, const, var outside as well inside {}.
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);
{
  var a = 110;
  let b = 120;
  const c = 130;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

// Output:
// 10
// 20
// 30
// 110
// 120
// 130
// 110
// 20
// 30

/* SCOPE LEVEL/NESTED  AND HOISTING AND CLOSURES 
1- Child can access parent varibale or block can access global varibales.
*/

// Nested Scope
function one() {
  const username = "ibtasam";
  function two() {
    const app = "notarynow";
    console.log(username);
  }
  //   console.log(app);
  two();
}
// two(); cannot called outside the one function scope.
one();
// Issue:
// app dosent run as child can access parent but parent dosent access chaild variables.

// MErged Example:

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website); // run
  }
  // console.log(website); // error
}

// console.log(username); /error

// function declaration and calling:

function AddOne(value) {
  return value + 1;
}

console.log(AddOne(10)); // 11

const AddTwo = function (value) {
  return value + 2;
};

console.log(AddTwo(10)); // 12

// ISSUE:
// what if we call function before declaration.

console.log(AddOne(10)); // 11
function Add1(value) {
  return value + 1;
}

console.log(AddTwo(10)); // Error
const Add2 = function (value) {
  return value + 2;
};

/* What is hoisting and execution context */

// Hoisting:
// 1- Hoisting is a mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// 2- Only the declaration is hoisted not the initialisation.
// 3- var hoisted but let and const not hoisted.
// 4- Function declaration hoisted but function expression not hoisted.

// Execution Context:
// 1- Global Execution Context.
// 2- Functional Execution Context.
// 3- Eval Execution Context.
