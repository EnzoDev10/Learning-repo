// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName, age);

// naming Conventions
// - Only letters, number, underscores and dollar signs
// - Can't start with a number
// - Use camelCase (Each word after the first one is capitalized)

// Let variables values can be re-assigned but const don't
// Also, let variables can be created without a given value,
// On the other hand, const variables have to be given a variable
// There are some exceptions to this though

// For example, a const with an array can have values added to it
const arr = [1, 2, 3, 4];

// New values can't be re-assigned with the "=" operator
// But if you use an array method like push, it is possible to add more values
arr.push(5);

console.log(arr);

// Same thing with an object

const person = {
	name: "Brad",
};

person.name = "John";

person.emai = "brad@gmail.com";

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
	e = 20,
	f = 30;


// Data types

// primitives Types

let str = "This a string of characters"; // Text or characters

let int = 1234; // Numbers

let Boolean = true; // Boolean values like false and true

let nullVar = null; // Absence of value

let undefinedVar = undefined; // A variable without a value defined

let Symbol = Symbol("id"); // i don't undesetand symbols, let's say they are part of object

let bigInt = 9007199254740991n; // for numbers bigger that what int variables can handle

// reference Types
// Every reference types is an object

const arrays = [1,2,3,4]; // Array of values

const jessica = { // Object 
    email: "jess@gmail.com",
}

function sayHello() { // Functions
    console.log("hello");
}


// Type Conversion

let amountStr = "100";

let amountInt = +amountStr; // converts a string to an int. The string has to be a number.

amountStr = amountInt.toString(); // Converts an int to a string.

let amountFloatStr = "99.5"; 

let amountFloat = parseFloat(amountFloatStr); // Converts a string number with decimals into a number.

let amountBool = Boolean(amountStr) // Converts a string or number into a boolean.

