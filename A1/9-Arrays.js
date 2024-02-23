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
