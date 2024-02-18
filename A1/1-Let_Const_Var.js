/*

Scope:
var: 
  Function-scoped or globally scoped. A variable declared with var is accessible anywhere within the 
  function (function scope) or globally if declared outside any function. This can lead to unintended side 
  effects and is generally discouraged in modern JavaScript.

let and const: 
  Block-scoped. A variable declared with let or const is only accessible within the block 
  (e.g., if statement, for loop, curly braces) where it is declared. This helps prevent accidental 
  modification of variables from other parts of your code.

Mutability:
  var and let: Mutable. You can freely reassign a new value to a variable declared with var or let.
  const: Immutable. Once you assign a value to a variable declared with const, you cannot change it later. 
  This helps ensure that the value remains consistent throughout your code.

*/
{
  var str = "Hello World!"; // var variable can be reassigned - Function | Global Scope
  let str2 = "ibtasam"; // var variable can be reassigned - Function | Block {} Scope
  const str3 = "Hello JS"; // const variable can't be reassigned - Function | Block {} Scope

  str = "Hello World! 2"; // var variable can be reassigned
  str2 = "ibtasam 2"; // var variable can be reassigned
  // str3 = "Hello JS 2"; // Error- const variable can't be reassigned

  console.log(str);
  console.log(str2);
  console.log(str3);

  console.table([str, str2, str3]);
}

{
  str = "Hello World! 3";
  console.log(str);
  console.log(str2); // Error- let variable is not define in this scope
  //   console.log(str3);
}

/*
KEY POINTS:

Best Practices:
    Always use const for variables meant to hold fixed values.
    Prefer let for variables whose values might change within a block.
    Avoid using var for global variables, especially in modern JavaScript development.

*/
