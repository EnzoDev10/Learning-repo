// Number / int properties
const num = 5;

x = num.toString(); // Converts to string

x = num.toFixed(2);
// Creates a string representation of a decimal version of an int
// The argument dictates how many decimal places there will be

x = num.toPrecision(3); // Same as toFixed but is argument takes in account the non decimal part

x = num.toExponential(2); // Returns the exponential

x = num.toLocaleString("ar-EG"); // Returns a local version of a number. In this case, egipt.

x = Number.MAX_VALUE; // returns the largest value possible

x = Number.MIN_VALUE; // Returns the lowest value possible

//console.log("num", x);

// Math properties

let m;

m = Math.sqrt(9); // Returns the square root of a number

m = Math.abs(5); // returns the absolute of a number

m = Math.round(4.2); // Rounds a number. lower than.5 rounds down and higher than .5 rounds up

m = Math.ceil(4.2); // Always rounds a number up

m = Math.floor(4.2); // Always rounds a number down

m = Math.pow(2, 3); // Raises the 1st arg to the power of the 2nd

m = Math.min(4, 5, 3); // Returns the lowest number

m = Math.max(4, 5, 3); // Returns the higher number

m = Math.random(); // Returns a random decimal between 0 and 1

m = Math.floor(Math.random() * 100 + 1); // returns a random number between 0 and 100.

//console.log("math ", m);
