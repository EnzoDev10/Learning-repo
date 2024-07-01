/* for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) console.log(i);
}
 */
// Replace "for" with "while"

/* for (let i = 0; i < 3; i++) {
	alert(`number ${i}!`);
}
 */

/* 
let i = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
} */

/* Repeat until the input is correct */
/* 
The loop must ask for a number until 
either the visitor enters a number greater than 100 or 
cancels the input/enters an empty line.
*/

/* while (true) {
	let userNumber = prompt("Input a number greater than 100");

	if (userNumber > 100 || userNumber === "") {
		break;
	}
}
 */

/* Output prime numbers */
/* Write the code which outputs 
prime numbers in the interval from 2 to n. 
n is a prime if it can’t be evenly divided by anything except 1 and n.
*/

function primeNumbers(n) {
	let m = 10;

	nextPrime: for (let i = 2; i <= n; i++) {
		// for each i...

		for (let j = 2; j < i; j++) {
			// look for a divisor..
			if (i % j == 0) continue nextPrime; // not a prime, go next i
		}

		console.log(i); // a prime
	}
}

primeNumbers(10);
