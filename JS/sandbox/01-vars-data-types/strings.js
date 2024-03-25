let x;

const name = "john";
const age = 31;

// Basic way to add variables to a string
x = "Hello, my names is " + name + " and I am " + age + " years old";

// Better way using Template Literals 
x = `Hello, my name is ${name} and i am ${age} years old`;

// String Properties and Methods

const s = "hello World";

x = s.length; // Returns the length of the string

x = s[0]; // With square brackets you can access the characters

x = s.__proto__; // Returns all the properties you can use

x = s.toUpperCase(); // All characters become uppercase
x = s.toLowerCase(); // All charactesr become lowercase

X = s.indexOf("h"); // Returns the index of the character

x = s.substring(0,4); 
// Returns a part of the string. 
// First argument is where it starts to cut and second where it ends

x = s.slice(-11, -6); // Same as substring but allows the use of negative indexes

x = s.trim(); // Removes whitespaces

x = s.replace("world", "John"); // returns a copy of the original string with the first arg replaced with the second 

x = s.includes("Hello"); // Returns a boolean if the arg is inside the string

x = s.split(" "); // Splits the str into an array. The arg defines where it cuts the string
// To cut the string into each character give it an empty string

//console.log(x); 



