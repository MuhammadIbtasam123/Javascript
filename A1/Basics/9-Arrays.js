/* Arrays */
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const anotherArr = new Array(1, 2, 3, 4, 5); // Array(...args) -> ...args convert to array
console.log(anotherArr);

/* Array Methods */

const newArray = [1, 2, 3, 4, 5];

// 1. push() - Add element to the end of the array
newArray.push(6); // [1, 2, 3, 4, 5, 6]
console.log(newArray);

// 2. pop() - Remove element from the end of the array
newArray.pop(); // [0, 1, 2, 3, 4]
console.log(newArray);

// 3. unshift() - Add element to the beginning of the array
newArray.unshift(0); // [0, 1, 2, 3, 4, 5]
console.log(newArray);

// 4. shift() - Remove element from the beginning of the array
newArray.shift(); // [1, 2, 3, 4, 5]
console.log(newArray);

// 5. splice() - reomve elements from array from start to end (end element included) - modify the original array
newArray.splice(1, 2); // [1, 4, 5]
console.log(newArray);

// 6. slice() - reomve elements from array from start-index to end-index (end element not included i.e before it) - dosn't modify the original array
newArray.slice(1, 3); // [4, 5]
console.log(newArray);

// 7. includes() - check if element is present in array
newArray.includes(4); // true
console.log(newArray);

// 8. indexOf() - get index of element in array
newArray.indexOf(4); // 0
console.log(newArray);

// 9. reverse() - reverse the array
newArray.reverse(); // [5, 4, 3, 2, 1]
console.log(newArray);

// 10, sort() - sort the array
newArray.sort(); // [1, 2, 3, 4, 5]
console.log(newArray);

// 11. concat() - merge two arrays - Return new array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
console.log(arr3);

// -- Modren ECMA way
// 11/A. spread operator - merge two arrays - Return new array
const arr4 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 12. join() - join array elements to string - Array -> String - join(separator i.e (-, _, /))
const arr5 = [1, 2, 3, 4, 5];
const str = arr5.join(""); // "12345"

// 13. flat() - flat the nested array - flat( depth = 1 by default )
const arr6 = [1, 2, [3, 4, [5, 6]]];
const flatArr = arr6.flat(Infinity); // [1, 2, 3, 4, 5, 6]

// 14. isArray() - check if the given value is array
Array.isArray(arr6); // true

// 15. .from() - convert array-like or iterable object to array - String -> Array
const str1 = "Hello";
const arr7 = Array.from(str1); // ["H", "e", "l", "l", "o"]

// 16. .of() - create array from the given arguments
const arr8 = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
console.log(arr8);
