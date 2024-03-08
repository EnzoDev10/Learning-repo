// Date is a built in object that stores dates and time.

// A new date instance whitout argument returns the current date and time.
const now = new Date();

console.log(now);

// A date instance can receive three diferrent types of arguments

// TImestamp method - miliseconds since epoch time
new Date(-6106015800000);

// Date string method
new Date("July 4 1776 12:30");

// Date and time method - (Y, Mo, H, Mi, S, Mil)
new Date(1776, 6, 4, 12, 30, 0, 0);

// Once we have a date we can use the get method,
// which allows us to retrieve specific parts

const birthday = new Date(2004, 6, 2);

// As a side note, months are 0-indexed

console.log("My birth month is " + birthday.getMonth())

// With the set method we can change a specific part
birthday.setFullYear(1994);

console.log("Now my birth year is " + birthday.getFullYear())