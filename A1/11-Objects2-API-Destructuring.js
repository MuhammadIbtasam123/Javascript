// Destructuring the object

const person = {
  name: "Muhammad ibtasam",
  age: 25,
};

// Destructuring the object
const { name, age } = person;
console.log(name, age);

// Destructuring the object with different variable names
const { name: personName, age: personAge } = person;
console.log(personName, personAge);

// Data from API - JSON - Object | Array of objects mostly

// JSON object
// {
//     "name": "Muhammad ibtasam",
//     "age": 25,
//     "address": {
//         "city": "Karachi",
//         "country": "Pakistan",
//     },
// }

// Data from API : Array of objects
[
  {
    name: "Muhammad ibtasam",
    age: 25,
    address: {
      city: "Karachi",
      country: "Pakistan",
    },
  },
  {
    name: "Muhammad ibtasam",
    age: 25,
    address: {
      city: "Karachi",
      country: "Pakistan",
    },
  },
];
