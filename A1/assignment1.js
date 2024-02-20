// // **************** Question 1 ****************
// // converts temperature from celsius to fahrenheit and vice versa.

// // 1- Using switch , template literals and alert.

// let temperatureValue = parseFloat(prompt("Enter temperature"));
// let temperatureUnit = prompt("Enter Temperature Unit (C/F)").toLowerCase();

// switch (temperatureUnit) {
//   case "c":
//     let fahrenheit = (temperatureValue * 9) / 5 + 32;
//     alert(
//       `Temperature ${temperatureValue}'C converted to ${fahrenheit.toFixed(
//         1
//       )}'F`
//     );
//     break;
//   case "f":
//     let celsius = ((temperatureValue - 32) * 5) / 9;
//     alert(
//       `Temperature ${temperatureValue}'F converted to ${celsius.toFixed(1)}'C`
//     );
//     break;
//   default:
//     alert("Invalid unit entered. Please enter 'C' or 'F'.");
// }

// // 2- Using if..else , template literals and alert.
// {
//   let temperatureValue = parseFloat(prompt("Enter temperature"));
//   let temperatureUnit = prompt("Enter Temperature Unit (C/F)").toLowerCase();
//   if (temperatureUnit === "c") {
//     let fahrenheit = (temperatureValue * 9) / 5 + 32;
//     alert(
//       `Temperature ${temperatureValue}'C converted to ${fahrenheit.toFixed(
//         1
//       )}'F`
//     );
//   } else if (temperatureUnit === "f") {
//     let celsius = ((temperatureValue - 32) * 5) / 9;
//     alert(
//       `Temperature ${temperatureValue}'F converted to ${celsius.toFixed(1)}'C`
//     );
//   } else {
//     alert("Invalid unit entered. Please enter 'C' or 'F'.");
//   }
// }

/* ************************** Prime numbers ************************** */

// function checkPrimeNumbers(startingNumber, endingNumber) {
//   let primeNumbers = [];
//   for (let i = startingNumber; i <= endingNumber; i++) {
//     let isPrime = true;
//     if (i === 1 || i === 0) {
//       isPrime = false;
//     } else if (i > 1) {
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//     }
//     if (isPrime) {
//       primeNumbers.push(i);
//     }
//   }
//   return primeNumbers;
// }

// let startingNumber = Number(prompt("Enter starting number"));
// let endingNumber = Number(prompt("Enter ending number"));
// let PrimeNumberArray = checkPrimeNumbers(startingNumber, endingNumber);
// console.log(PrimeNumberArray);

// **************** Question 3 ****************
// JS Class + objects)

class basketProto {
  constructor(value) {
    this.amount = value;
  }

  addToBasket(amountToAdd) {
    this.amount += amountToAdd;
  }

  pay() {
    console.log(`${this.amount} has been paid`);
  }

  clearBasket() {
    this.amount = 0;
  }
}

let obj1 = new myBasket(0);
console.log(obj1);
console.log(typeof obj1);

let obj = new basketProto(0);
obj.addToBasket(2);
obj.addToBasket(4);
obj.pay();
obj.clearBasket();
obj.pay();

// **************** Question 4 ****************

class myBasket extends basketProto {
  constructor(value) {
    super(value);
  }
}

// **************** Question 5 ****************

// **************** Question 6 ****************

// const movies = [
//   {
//     name: "The Shawshank Redemption",
//     director: "Frank Darabont",
//     imdbRating: 9.3,
//   },
//   { name: "The Green Mile", director: "Frank Darabont", imdbRating: 8.6 },
//   { name: "The Mist", director: "Frank Darabont", imdbRating: 7.1 },
//   { name: "The Godfather", director: "Francis Ford Coppola", imdbRating: 9.2 },
//   {
//     name: "The Godfather Part II",
//     director: "Francis Ford Coppola",
//     imdbRating: 9.0,
//   },
//   { name: "Apocalypse Now", director: "Francis Ford Coppola", imdbRating: 8.4 },
//   { name: "The Dark Knight", director: "Christopher Nolan", imdbRating: 9.0 },
//   { name: "Inception", director: "Christopher Nolan", imdbRating: 8.8 },
//   { name: "Interstellar", director: "Christopher Nolan", imdbRating: 8.6 },
//   {
//     name: "The Lord of the Rings: The Fellowship of the Ring",
//     director: "Peter Jackson",
//     imdbRating: 8.8,
//   },
//   {
//     name: "The Lord of the Rings: The Two Towers",
//     director: "Peter Jackson",
//     imdbRating: 8.7,
//   },
//   {
//     name: "The Lord of the Rings: The Return of the King",
//     director: "Peter Jackson",
//     imdbRating: 8.9,
//   },
// ];

// // let nameOfDirector = prompt("Enter name of director").trim().toLowerCase();
// let nameOfDirector = "Peter Jackson";

// const filteredMoviesOfSpecificDirector = movies.filter(
//   (element) => element.director === nameOfDirector
// );
// console.log(filteredMoviesOfSpecificDirector);
// const SumRating = filteredMoviesOfSpecificDirector.reduce(
//   (sum, element) => (sum += element.imdbRating),
//   0
// );
// console.log(SumRating);
// const avgRating = (SumRating / filteredMoviesOfSpecificDirector.length).toFixed(
//   1
// );
// console.log(avgRating);
