/* ********************** KEY POINTS: ************************
Primitive Types:

1- String: Represents sequence of characters, enclosed in quotes (single or double). 
Used for text data.

2- Number: Represents numeric values, including integers, decimals, and special values 
like Infinity and NaN (Not a Number).

3- Boolean: Represents logical values, either true or false. Used for making decisions 
in your code.

4- Null: Represents the intentional absence of any value. It's not the same as undefined.

5- Undefined: Represents a variable that has been declared but not assigned a value. 
Also indicates the absence of a value due to other reasons.

6- Symbol: Introduced in ES6, represents unique and immutable values. Primarily used for 
object property keys to prevent naming conflicts.
example:
let uniqueId = Symbol("my-unique-id");

Non-Primitive Type:

Object: Represents complex data structures composed of key-value pairs. 
Can store various data types and provide properties and methods. Used for complex data 
organization.

example:
let person = {
    name: "Alice",
    age: 25,
    sayHello: function() {
        console.log("Hello!");
    }
};

Typeof Operator:
The data type of a value can be checked using the typeof operator.

*/

console.log(typeof "Hello World!"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol("my symbol")); // symbol
console.log(typeof { name: "Alice", age: 25 }); // object
console.log(typeof [1, 2, 3, 4]); // object
