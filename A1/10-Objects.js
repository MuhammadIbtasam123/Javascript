/* 
Objects: 
Objects are a collection of key-value pairs. The keys are strings and the values 
can be any data type.

Ways to create an object:
1. Object literal
2. Object constructor
    -Object.create() method 
    -Singleton method
*/

const sym = Symbol("key");

// *Note:
// Symbol (sym) as key is a correct way to use it in object
// we can't access it using dot notation
// we can access it using bracket notation - person[sym]

// 1. Object literal
const person = {
  name: "Ibtasam",
  [sym]: "val", // *Note
  age: 23,
  hobbies: ["Reading", "Coding", "Traveling"],
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// Accessing the object properties

// Dot notation
console.log(person.name); // Ibtasam

// Bracket notation
console.log(person["age"]); // 23

// Adding new property to the object
person.email = "its.ibtasamqureshi123@gmail.com";
console.log(person.email);

// Deleting property from the object
delete person.email;

// Freezing the object for further modification/changes
Object.freeze(person);

// Dosen't allow to add new property
person.email = "its.ibtasamqureshi123@gmail.com";
console.log(person);
