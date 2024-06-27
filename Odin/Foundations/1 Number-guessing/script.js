// * Definition
/*  
Make a game in which the user 
has to guess a random number chosen by the page.
Give the user a guess limit of 10.
If the user wins, show a winning message.
If the user loses, show a losing message.
*/

// * Pseudocode

/* 
1) Generate a random number on game start.
2) get a guess from the user.
3) Check:
    1- If the guess is correct, 
    turn message to green and
    let the user restart the game
    
    2- Else,
    let the user know that his guess was incorrect
    3- let the user know whether his guess is 
    lower or higher than the actual number and
    4- check:
        5- If the guess count is below 10,
        let the user guess again
        6- else, don't let the user guess again
        Show a message as a game over 
        and let it restart the game 

4) regardless of the result show the user the previous guesses 
*/

// ? investigate

/* - How to prevent the user 
from clicking a button and the opposite. V
- How to add text to an existing p tag  V
-+ https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom
- How to know the value of an input on form submittion  
*/

// TODO Parts
// function para generar el número
// Function que lleva el número de intentos y que escribe los intentos en un parrafo
// Function que reinicia el juego

let number;
let guessesCounter = [];

let form = document.getElementById("guessForm");
let input = document.getElementById("numberInput");
let guessBtn = document.getElementById("guessBtn");
let guessesList = document.getElementById("guessesList");
let gameStatus = document.getElementById("gameStatus");
let hint = document.getElementById("hint");
let restartBtn = document.getElementById("restartBtn");

function randomNumber() {
	number = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
	// Some browsers allow the user to input a non numeric value
	// so checking that is actually a number is needed
	let guess = parseInt(input.value);

	// Clears the input
	input.value = "";

	console.log(guessesCounter.length);

	if (!isNaN(guess)) {
		// Adds the guess to an array to keep track of how many guesses
		// were made
		guessesCounter.push(guess);

		guessesList.textContent += ` ${guess}`;
		guessesList.classList.remove("hidden");

		// If the user used all his tries, end the game
		// And lets him restart the game
		if (guessesCounter.length === 10) {
			input.disabled = true;
			guessBtn.disabled = true;
			restartBtn.classList.remove("hidden");

			gameStatus.textContent = "!!!GAME OVER!!!";
			gameStatus.style.background = "red";
		} else {
			// While the user has tries and fails,
			// shows an error message And gives a hint
			if (guess != number) {
				gameStatus.textContent = "Wrong!";
				gameStatus.style.background = "red";

				hint.classList.remove("hidden");

				if (guess < number) {
					hint.textContent = "Last guess was too low!";
				} else {
					hint.textContent = "Last guess was too high!";
				}

				// If the user wins shows a winning message and
				// lets him restart the game
			} else {
				input.disabled = true;
				guessBtn.disabled = true;
				hint.classList.add("hidden");
				restartBtn.classList.remove("hidden");

				gameStatus.textContent = "Congratulations! You got it right!";
				gameStatus.style.background = "green";
			}
		}
	}
}

function restartGame() {
	randomNumber();
	console.log(number);
	input.disabled = false;
	guessBtn.disabled = false;

	guessesCounter = [];

	guessesList.textContent = "Previous guesses: ";
	guessesList.classList.add("hidden");

	gameStatus.textContent = "";
	gameStatus.style.background = "white";
	hint.classList.add("hidden");

	restartBtn.classList.add("hidden");
}

function handleForm(event) {
	event.preventDefault();
}

randomNumber();

form.addEventListener("submit", handleForm);
form.addEventListener("submit", () => {
	checkGuess();
});

restartBtn.addEventListener("click", () => {
	restartGame();
});

console.log(number);
