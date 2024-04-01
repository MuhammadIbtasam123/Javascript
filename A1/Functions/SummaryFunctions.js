/* Functions summary */
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

const a1 = ["hi", "bye", 3, true].find(function (item) {
  return item == 1; //true == 1 but true !== 1
});
console.log(a1);

//Now you can create multiple objects from BLUEPRINT OF CONSTRUCTOROFOBJECT
function Person(n, a) {
  this.name = n;
  this.age = a;
  this.behav = function () {
    return `person returns ${this.name} having age ${this.age}`;
  };
  this.havingFood1 = () => {
    return `${this.name} is having ${this.favfood} but likes to eat ${this.food} also`;
  };
}

const FirstChild = new Person("Hadi", 25);
const SecondChild = new Person("Asad", 20);
Person.prototype.food = "Pulao";
SecondChild.favfood = "Pizza";
SecondChild.havingFood = function () {
  return `${this.name} is having ${this.favfood} but likes to eat ${this.food} also`;
};

console.log(SecondChild.havingFood1());
