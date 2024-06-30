// * Definition
/* 
Given an array of people, create two lists;
One for the refused and one for the admitted to enter.
If the person name is "Lola" or "Phil", add them to the refused list.
Else, add the person to the admitted list.
*/

// ! Extra
/* 
Both lists of names will be untidy, 
there will be a comma at the end of each one.
Write a function that slices the last comma off each element
and add a full stop to the end.
*/

const people = [
	"Chris",
	"Anne",
	"Colin",
	"Terri",
	"Phil",
	"Lola",
	"Sam",
	"Kay",
	"Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

for (person of people) {
	if (person === "Phil" || person === "Lola") {
		refused.textContent += `${person}, `;
	} else {
		admitted.textContent += `${person}, `;
	}
}

function replacelastComma(element) {
	// Slices the last two chars of a string and adds a full stop at the end.
	// In this case we use the last two because in this case
	// there is a comma and a whitespace at the end
	element.textContent = element.textContent.slice(0, -2) + ".";
}

replacelastComma(refused);
replacelastComma(admitted);
