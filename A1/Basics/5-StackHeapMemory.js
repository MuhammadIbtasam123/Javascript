/* 

Stack and Heap Memory

Stack: 
1. All [primitve data] types are stored in stack memory. 
2. All the [data] that is stored in stack memory is [copy] of the original data.
3. string number boolean null undefined symbol are stored in stack memory.

Heap:
1. All [reference data] types are stored in heap memory.
2. objects arrays and functions are stored in heap memory.

*/

let myNameIs = "Muhammad Ibtasam";
let myNameIsCopy = myNameIs; // copy of myNameIs - not reference - stored in stack memory

console.log(myNameIs); // Muhammad Ibtasam
console.log(myNameIsCopy); // Muhammad Ibtasam

myNameIsCopy = "Ahmad";

console.log(myNameIs); // Muhammad Ibtasam
console.log(myNameIsCopy); // Ahmad

let myName = {
  name: "Muhammad Ibtasam",
  age: 25,
};

console.log(myName); // { name: 'Muhammad Ibtasam', age: 25 }
let myNameCopy = myName; // reference - stored in heap memory

myNameCopy.email = "ibtasam@gmail.com";
console.log(myName); // { name: 'Muhammad Ibtasam', age: 25, email:ibtasam@gmail.com }
console.log(myNameCopy); // { name: 'Muhammad Ibtasam', age: 25, email:ibtasam@gmail.com }
