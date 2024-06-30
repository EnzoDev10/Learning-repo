// * Definition
/* 
Create a countdown that goes from 10 to 0.
Add each number by inserting a paragraph. 
If the number is 10, print "Countdown 10" to the paragraph.
If the number is 0, print "Blast off!" to the paragraph.
For any other number, print just the number to the paragraph.
*/

let output = document.querySelector(".output");

output.innerHTML = "";

for (let i = 10; i >= 0; i--) {
	const para = document.createElement("p");
	if (i === 10) {
		para.textContent = "Countdown 10";
	} else if (i === 0) {
		para.textContent = "Blast off!";
	} else {
		para.textContent = i;
	}
	output.appendChild(para);
}
