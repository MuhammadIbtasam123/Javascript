// use of for each loop : just simple priting not return any value

const coding = ["js", "ruby", "java", "python", "cpp"];

const returnValue = coding.forEach((item) => {
  return console.log(item);
});

console.log(returnValue);

// use of map loop : return new array

const returnValueMap = coding.map((item) => {
  console.log(item);
  return item;
});

console.log(returnValueMap);

// use of filter loop : return new array based on condition matched

//filtering on the basis of even number
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const returnValueFilter = array.filter((item) => {
  return item % 2 === 0;
});

console.log(returnValueFilter);

// use of reduce loop : return single value
// initail value is 0
const result = array.reduce((acc, value) => {
  return acc + value;
}, 0);
console.log(result);
// filter example array of objects
// consider a scenario where you have an array of objects and you want to filter out the objects based on a specific condition.
// You can use the filter method to achieve this.
// suppose you get the data from api and you want to filter out the data based on the filter that user applied.

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// 1. Filter books based on the genre "Non-Fiction".
const nonFictionBooks = books.filter((bk) => {
  return bk.genre === "Non-Fiction";
});
console.log(nonFictionBooks);

// 2. Filter books published before 1990.

const Before1990 = books.filter((item) => {
  return item.publish < 1990;
});

console.log(Before1990);

// 3. Filter books with an edition after 2010.

const After2010 = books.filter((bk) => bk.edition > 2010);
console.log(After2010);

// 4. Filter books published between 1980 and 1990.
const Between80and90 = books.filter(
  (bk) => bk.publish > 1980 && bk.publish < 1990
);
console.log(Between80and90);

// 5. Filter books with a genre of "Science" and published after 2010.
const Science2010 = books.filter(
  (bk) => bk.publish < 2010 && bk.genre === "Science"
);
console.log(Science2010);

// 7. Filter books published between 1980 and 2000 with a genre of "History".
//chaining
const History = books
  .filter((bk) => bk.genre === "History")
  .filter((element) => element.publish > 1980 && element.publish < 2000);
console.log(History);

// scnario 2: suppose you have a shopping cart and you want to calculate the total price of the items in the cart.
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
