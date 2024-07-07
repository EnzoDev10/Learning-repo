// ES6 way to import functions/modules from other files

// Without curly braces, imported by default
// with curly braces, specificaly imported(?)
import getPosts, { postsLength } from "./postController.js";

console.log(getPosts);
console.log(`Posts length: ${postsLength()}`);

// old Way of exporting functions/modules from other files
/* const {generateRandomNumber, celciusToFahrenheit} = require("./utils")

console.log(`Random Number: ${generateRandomNumber()}`)

console.log(`Celsius to fahrenheit: ${celciusToFahrenheit(0)}`) */
