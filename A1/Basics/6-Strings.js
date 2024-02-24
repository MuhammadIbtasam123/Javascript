/* working with Strings */

const name = "The Shawshank Redemption";
const author = "Frank Darabont";

// use of backticks - template literals - to concatenate strings - string interpolation
console.log(`${name} is directed by ${author}`);

const game = new String("Cricket");
console.log(game); // String { 'Cricket' } - object - key:value pair

// string methods
console.log(game.length); // 7
console.log(game.toLowerCase()); // cricket
console.log(game.toUpperCase()); // CRICKET
console.log(game.charAt(0)); // C
console.log(game.indexOf("C")); // 0

// substring - slice: Get part of string (start index, end index)
console.log(game.substring(0, 3)); // Cri - excluding 3rd index
console.log(game.slice(0, 3)); // Cri - excluding 3rd index

// split: split string into array of substrings
let s = "Hello-World";
console.log(s.split("-")); // [ 'Hello', 'World' ]

// trim() - remove white spaces from start and end of string
// UseCase : getting input from user in form - remove white spaces from start and end of string
const str = "    Hello World    ";
console.log(str.trim()); // Hello World

// replace
console.log(str.replace("Hello", "Hi")); // Hi World

// includes
console.log(str.includes("Hello")); // true
