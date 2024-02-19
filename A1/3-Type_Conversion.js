/* *************** Type Conversion *************** 

**1. Determining Data Types:**
   - `typeof` operator is used to check the data type of a variable (e.g., `typeof score`).

**2. Type Conversion:**
   - JavaScript allows conversion between different data types using built-in functions:
     - `Number(value)` converts a value to a number.
     - `Boolean(value)` converts a value to a boolean.
     - `String(value)` converts a value to a string.

**3. String Conversion:**
    - `String(value)` converts any value to its string representation.

**4. Number Conversion:**
   - When converting a string to a number:
     - If the string contains only digits, it's converted to the corresponding number.
     - If the string contains non-digits, it's converted to `NaN` (Not a Number).
     - `true` converts to 1, and `false` converts to 0.

**5. Boolean Conversion:**
   - When converting a value to a boolean:
     - Non-empty strings, non-zero numbers, and `true` become `true`.
     - Empty strings, zero, `null`, `undefined`, and `false` become `false`.

** Considerations:**
- Consider using explicit type checks (e.g., `if (typeof value === 'number')`) before performing operations that require specific data types.

*/

let score = "ibtasam";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "ibtasam";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ibtasam" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

/************************* Operations ******************************> */

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(3 + 3); // 6
// console.log(3 - 3); // 0
// console.log(3 * 3); // 9
// console.log(3 / 3); // 1
// console.log(3 % 3); // 0
// console.log(3 ** 3); // 27

/* ******************* String cancatentation ******************* */

let firstName = "Muhammad";
let lastName = " Ibtasam";
console.log(firstName + lastName); // Muhammad Ibtasam

// using template literals
console.log(`${firstName} ${lastName}`); // Muhammad Ibtasam

/* ****************** JS Ambiguity **************************/

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log(2 + 3 + "7"); // 57
console.log("7" + 2 + 3); // 723
console.log(2 + "3" + 7); // 237
