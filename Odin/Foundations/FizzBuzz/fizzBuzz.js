// * Objective
/* Write a program that takes a user’s input and 
prints the numbers from one to the number the user entered. However, 
for multiples of three print Fizz instead of the number and
 for the multiples of five print Buzz.
  For numbers which are multiples of both three and five print FizzBuzz. */

// ! Extra
// Create a new li element for each number and added it to the page.

// * PseudoCode
// 1 Get input from the user 
// 2 Count from 1 to the number the user entered through a loop
// check:
// 3 If number is a multiple of three return Fizz
// 4 If number is a multiple of five return Buzz
// 5 If number is a multiple of both, return FizzBuzz.

// ? Investigate
// How to submit input value to a JS function. V
// How to count from 1 to a certain number with a loop. V
// How to know if a number is a multiple of another number. V
// How to create and add elements to a page with JS. V


function removeChilds(parent) {
	const element = document.getElementById(parent);
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function fizzBuzz() {
	const list = document.getElementById("list");
	let InputValue = document.getElementById("numberInput").value;
	let listItemValue = 0;

	for (let i = 1; i <= InputValue; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			listItemValue = "FizzBuzz";
		} else if (i % 3 == 0) {
			listItemValue = "Fizz";
		} else if (i % 5 == 0) {
			listItemValue = "Buzz";
		} else {
			listItemValue = i;
		}

		list.innerHTML += `<li>${listItemValue}</li>`;
	}
}

let form = document.getElementById("numberForm");

// Prevents refreshing of page on form submission
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener("submit", handleForm);

// ? learning Note:
// To prevent a function running without the event happening,
// use an arrow function that calls it instead of calling it on its own.
form.addEventListener("submit", () => {
	removeChilds("list");
});

form.addEventListener("submit", fizzBuzz);
