// Dates

// Create a new Date object representing the current date and time
let myDate = new Date();
console.log(myDate); // Output: 2024-02-22T19:00:31.098Z

// Various ways to convert and display the date
console.log(myDate.toString()); // Output: Fri Feb 23 2024 00:04:37 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()); // Output: Fri Feb 23 2024
console.log(myDate.toLocaleString()); // Output: 2/23/2024, 12:04:37 AM
console.log(myDate.toJSON()); // Output: 2024-02-23T00:04:37.098Z
console.log(myDate.toTimeString()); // Output: 00:04:37 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toUTCString()); // Output: Fri, 23 Feb 2024 00:04:37 GMT
console.log(myDate.toISOString()); // Output: 2024-02-23T00:04:37.098Z
console.log(myDate.toTimeString()); // Output: 00:04:37 GMT+0500 (Pakistan Standard Time)

// Check the type of myDate object
console.log(typeof myDate);

// Create a new Date object for a specific date
let myCreatedDate1 = new Date(2023, 0, 23); // January 23, 2023 - 0 for January
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 5:03 AM
let myCreatedDate3 = new Date("2023-01-14"); // January 14, 2023
let myCreatedDate4 = new Date("01-14-2023"); // January 14, 2023

// Display the created date in a localized format
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

// Get the current timestamp - useCase : Quiz, Exam, etc
let myTimeStamp = Date.now();

// Display the timestamp
console.log(myTimeStamp);

// Create a new Date object for the current date and time
let myCreatedDate = new Date();
console.log(myCreatedDate); // Output: 2024-02-23T00:04:37.098Z

// Get the time value of the created date object
console.log(myCreatedDate.getTime()); // Output: 1645580737098
console.log(myCreatedDate.getFullYear()); // Output: 2024
console.log(myCreatedDate.getMonth() + 1); // Output: 1 (0-based index, so add 1 for actual month)
console.log(myCreatedDate.getDate()); // Output: 23
console.log(myCreatedDate.getDay()); // Output: 5 (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
console.log(myCreatedDate.getHours()); // Output: 0
console.log(myCreatedDate.getMinutes()); // Output: 4
console.log(myCreatedDate.getSeconds()); // Output: 37
console.log(myCreatedDate.getMilliseconds()); // Output: 98
console.log(myCreatedDate.getTimezoneOffset()); // Output: -300 (in minutes)

// Calculate the current timestamp in seconds
console.log(Math.floor(Date.now() / 1000));

// Display the full name of the day of the week
console.log(
  myCreatedDate.toLocaleString("default", {
    weekday: "long",
  })
);
