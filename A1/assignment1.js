// // **************** Question 1 ****************
// converts temperature from celsius to fahrenheit and vice versa.

// 1- Using switch , template literals and alert.

let temperatureValue = parseFloat(prompt("Enter temperature"));
let temperatureUnit = prompt("Enter Temperature Unit (C/F)").toLowerCase();

switch (temperatureUnit) {
  case "c":
    let fahrenheit = (temperatureValue * 9) / 5 + 32;
    alert(
      `Temperature ${temperatureValue}'C converted to ${fahrenheit.toFixed(
        1
      )}'F`
    );
    break;
  case "f":
    let celsius = ((temperatureValue - 32) * 5) / 9;
    alert(
      `Temperature ${temperatureValue}'F converted to ${celsius.toFixed(1)}'C`
    );
    break;
  default:
    alert("Invalid unit entered. Please enter 'C' or 'F'.");
}

// 2- Using if..else , template literals and alert.
{
  let temperatureValue = parseFloat(prompt("Enter temperature"));
  let temperatureUnit = prompt("Enter Temperature Unit (C/F)").toLowerCase();
  if (temperatureUnit === "c") {
    let fahrenheit = (temperatureValue * 9) / 5 + 32;
    alert(
      `Temperature ${temperatureValue}'C converted to ${fahrenheit.toFixed(
        1
      )}'F`
    );
  } else if (temperatureUnit === "f") {
    let celsius = ((temperatureValue - 32) * 5) / 9;
    alert(
      `Temperature ${temperatureValue}'F converted to ${celsius.toFixed(1)}'C`
    );
  } else {
    alert("Invalid unit entered. Please enter 'C' or 'F'.");
  }
}

/* ************************** Prime numbers ************************** */

function checkPrimeNumbers(startingNumber, endingNumber) {
  let primeNumbers = [];
  let i = startingNumber;
  while (i <= endingNumber) {
    let isPrime = true;
    if (i === 1 || i === 0) {
      isPrime = false;
    } else if (i > 1) {
      let j = 2;
      while (j < i) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
        j++;
      }
    }
    if (isPrime) {
      primeNumbers.push(i);
    }
    i++;
  }
  return primeNumbers;
}

let startingNumber = Number(prompt("Enter starting number"));
let endingNumber = Number(prompt("Enter ending number"));
let PrimeNumberArray = checkPrimeNumbers(startingNumber, endingNumber);
console.log(PrimeNumberArray);

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

let obj = new basketProto(0);
obj.addToBasket(2);
obj.addToBasket(4);
obj.pay();
obj.clearBasket();
obj.pay();

/* Qiestion 4 / 5 */
class myBasket extends basketProto {
  constructor() {
    super(0);
    this.items = [];
  }

  addToBasket(itemName, itemPrice) {
    super.addToBasket(itemPrice);
    this.items.push({ itemName, itemPrice });
  }

  clearBasket() {
    super.clearBasket();
    this.items = [];
  }

  pay() {
    console.log(`${this.amount} has been paid`);
  }

  removeFromBasket(index) {
    if (index >= 0 && index < this.items.length) {
      super.addToBasket(-this.items[index].itemPrice);
      this.items.splice(index, 1);
    } else {
      console.log("Invalid index");
    }
  }
}

const obj1 = new myBasket();

obj1.addToBasket("Apple", 100);
obj1.addToBasket("Banana", 100);
console.log(obj1.items);

obj1.pay();
obj1.clearBasket();
obj1.pay();

// **************** Question 6 ****************

// 1- using pop() and unshift() method
function rightRotate(arr, n) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[i] = arr.pop();
  }
  for (let i = 0; i < n; i++) {
    arr.unshift(temp[i]);
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
let n = 2;
console.log(rightRotate(arr, n));

// 2- using splice() and concat() method
function rightRotate1(arr, n) {
  const endElements = arr.slice(arr.length - n);
  const startElements = arr.slice(0, arr.length - n);
  return endElements.concat(startElements);
}

let arr1 = [1, 2, 3, 4, 5];
let n1 = 2;

console.log(rightRotate1(arr1, n1));

// **************** Question 7 ****************

const movies = [
  {
    name: "The Shawshank Redemption",
    director: "Frank Darabont",
    imdbRating: 9.3,
  },
  { name: "The Green Mile", director: "Frank Darabont", imdbRating: 8.6 },
  { name: "The Mist", director: "Frank Darabont", imdbRating: 7.1 },
  { name: "The Godfather", director: "Francis Ford Coppola", imdbRating: 9.2 },
  {
    name: "The Godfather Part II",
    director: "Francis Ford Coppola",
    imdbRating: 9.0,
  },
  { name: "Apocalypse Now", director: "Francis Ford Coppola", imdbRating: 8.4 },
  { name: "The Dark Knight", director: "Christopher Nolan", imdbRating: 9.0 },
  { name: "Inception", director: "Christopher Nolan", imdbRating: 8.8 },
  { name: "Interstellar", director: "Christopher Nolan", imdbRating: 8.6 },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    imdbRating: 8.8,
  },
  {
    name: "The Lord of the Rings: The Two Towers",
    director: "Peter Jackson",
    imdbRating: 8.7,
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    imdbRating: 8.9,
  },
];

// let nameOfDirector = prompt("Enter name of director").trim().toLowerCase();
let nameOfDirector = "Peter Jackson";

const filteredMoviesOfSpecificDirector = movies.filter(
  (element) => element.director === nameOfDirector
);
console.log(filteredMoviesOfSpecificDirector);
const SumRating = filteredMoviesOfSpecificDirector.reduce(
  (sum, element) => (sum += element.imdbRating),
  0
);
console.log(SumRating);
const avgRating = (SumRating / filteredMoviesOfSpecificDirector.length).toFixed(
  1
);
console.log(avgRating);
