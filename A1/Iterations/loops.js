const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// looping using for loop

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// using while loop

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

// using for of ... used with arrays

for (let item of array) {
  console.log(item);
}

// consider you have object loop through it using for in loop

const employee = {
  name: "Muhammad Ibasam",
  age: 33,
  designation: "Associate Software Engineer",
};
for (let item in employee) {
  console.log(`${item}: ${employee[item]}`);
}
