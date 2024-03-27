// Arrays: A list of values.
let x;

const numbers = [12, 45, 33, 29, 39];

x = numbers[0]; // THe values inside can be accessed thorugh their index.
// The index of an array is zero based.

x = numbers[0] + numbers[3]; // You can even use operator when calling the values.

x = numbers.length; // Returns the length of the array.

numbers.length = 2; // Can be used to shorten an array.

numbers[2] = "string"; // The values can be changed too using the index.

// Array methods and properties

numbers.push(100); // Adds a new value to the end

numbers.pop(); // Removes the last value.

numbers.unshift(99); // Adds a new value to the beginning of the array.

numbers.shift(); // Removes the first value of the array.

numbers.reverse(); // Reverse the order of the array.

x = numbers.includes(20); // Checks if the arg is inside the array and returns a boolean.

x = numbers.indexOf(20); // Returns the index of the arg. If it isn't there, returns -1.

x = numbers.slice(1, 4); // Returns a new array with
// the values of the original but only from the indexes that are arguments.

// let x = numbers.splice(1, 4)
// Works the same as slice but also removes the values from the original array.

x = numbers.splice(1, 4).reverse().toString().charAt(0);
// Methods can also be chained

// Nesting, concat & spread

let z;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];

// nesting

// fruits.push(berries); // Arrays can be inside another array

// z = fruits[3][1]; // Example on how to access a value of the inside array.

// Concatenation

z = fruits.concat(berries); // Arrays can also be concatenated to create a single array.

// Spread
z = [...fruits, ...berries]; // Same as concat.

// Flatten
// Takes an array with nested arrays and returns a new one with all the values not nested.
const arrF = [1, 2, [3, 4], 5, [6, 7], 8];
z = arrF.flat();

// Static Methods on Array Object

z = Array.isArray(fruits); // Checks if arg is an array and returns a boolean.

z = Array.from("12345"); // Creates an array from arg.

const a = 1;
const b = 2;
const c = 3;

z = Array.of(a, b, c); // Creates an array with the values of variables.

//console.log(z);
