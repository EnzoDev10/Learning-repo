// String Challenge
// Capitalize myString

const myString = "developer";

const upperD = myString[0].toUpperCase();
const rest = myString.substring(1);

const myNewString = upperD + rest;

console.log(myNewString);

/* 
Number Challenge

Create a variable called x that is a random number between 1 and 100 
along with a variable called y that is a random number between 1 and 50.

Create a variable fro the sum, difference, product, quotient and remainder of x and y.
the output should have both numbers, operators and results.
*/

let xn = Math.floor(Math.random() * 100 + 1);
let yn = Math.floor(Math.random() * 50 + 1);


let sum = xn + yn

let difference = xn - yn

let product = xn * yn

let quotient = (xn / yn).toFixed(1)

let remainder = xn % yn

let sumOutput = `${xn} + ${yn} = ${sum}`
let differenceOutput = `${xn} - ${yn} = ${difference}`
let productOutput =`${xn} * ${yn} = ${product}`
let quotientOutput = `${xn} / ${yn} = ${quotient}`
let remainderOutput = `${xn} % ${yn} = ${remainder}`

console.log(sumOutput)
console.log(differenceOutput)
console.log(productOutput)
console.log(quotientOutput)
console.log(remainderOutput)