// Objects : to store associated attributes and functions

const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Pilot",
  write: function () {
    console.log("I am writing");
  },
};

// Accessing the object properties

// Dot notation
console.log(pen.type); // ballpoint

// Bracket notation
console.log(pen["color"]); // blue

// Adding new property to the object
pen.price = 100;
console.log(pen.price); // 100

// creating a function inside object
pen.closed = function () {
  console.log("I am closed");
};
pen.closed(); // I am closed

/*
KEYPOINTS:
- A normal named function/Nameless in object when this keyword is used, it refers to the object (Object as Parent).
- It try to find the property in the object, if it is not found then it will look for the property in the global scope.
- If the property is not found in the global scope, it will return undefined.
- For arrow function, this keyword refers to the global object.
- Object is never be a parent of Arrow function.
- When this keyword is used in arrow function, it will refer/try to find property from global object.

*So try not to create arrow function inside object.
*Always use siimple/named function inside object.
*/
