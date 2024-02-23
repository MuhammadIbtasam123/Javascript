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

//1. Constructor Method to create object

const person1 = new Object();

person1.name = "Ibtasam";
person1.age = 23;
person1.hobbies = ["Reading", "Coding", "Traveling"];
person1.greet = function () {
  console.log(`Hello, I am ${this.name}`);
};

console.log(person1);
// 2. Object literal
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

// Creating a nested object

const movie = {
  title: "inception",
  director: {
    name: "Christopher Nolan",
    age: 50,
  },
};

// Accessing the nested object properties
console.log(movie.director.name); // Christopher Nolan

// Cancatinating the objects

const car = {
  name: "BMW",
  model: "2021",
};

const bike = {
  name1: "Honda",
  model1: "2021",
};
// method 1: using spread operator
const vehicle = { ...car, ...bike };
console.log(vehicle);

// method 2: using Object.assign() method
const vehicle1 = Object.assign({}, car, bike);
console.log(vehicle1);

// consider array of objects

const movies = [
  {
    title: "inception",
    director: {
      name: "Christopher Nolan",
      age: 50,
    },
  },
  {
    title: "Interstellar",
    director: {
      name: "Christopher Nolan",
      age: 50,
    },
  },
  {
    title: "The Dark Knight",
    director: {
      name: "Christopher Nolan",
      age: 50,
    },
  },
];

// Accessing the array of objects
console.log(movies[0].title); // inception

// Looping through the array of objects - nested loops

for (let movie of movies) {
  for (let key in movie) {
    if (typeof movie[key] === "object") {
      for (let key1 in movie[key]) {
        console.log(key1, movie[key][key1]);
      }
    }
    console.log(key, movie[key]);
  }
}

// Methods to get the keys, values and entries of the object - return array
const person2 = {
  name: "Ibtasam",
  age: 23,
  hobbies: ["Reading", "Coding", "Traveling"],
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};
console.log(Object.keys(person2)); // ["name", "age", "hobbies", "greet"]
console.log(Object.values(person2)); // ["Ibtasam", 23, ["Reading", "Coding", "Traveling"], function]
console.log(Object.entries(person2)); // [["name", "Ibtasam"], ["age", 23], ["hobbies", ["Reading", "Coding", "Traveling"]], ["greet", function]]
