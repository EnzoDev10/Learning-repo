/*
Challenge 1:
mutate the fist array into the expected result:
const arr = [1, 2, 3, 4, 5];

expected Result:
[6, 5, 4 ,3 ,2, 1, 0];
*/

const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log("array challenges:");
console.log(arr);

/* 
Challenge 2:
Combien arr1 and arr2 into a new array called arr3 with the following elements:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

find a way to also get rid of one of the 5.

*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);

/* 
Object Challenge: 
step 1:
Create an array of objects called library. add 3 objects with a property of title, author, status.
Title and author should be strings(whatever value you want) and status should be another object 
with the properties of own, reading and read. which shoul all be boolean values.
For all status, set own to true and reading and read to false.

step 2:
you finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object.
Set the values using do notation.

step 3:
Destructure the title from the first book and rename the variable to firstBook.

step 4:
turn the library object into a JSON String.
*/

const library = [
	{
		title: "12 Rules for life",
		author: "jordan Peterson",
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: "Cumbres Borrascosas",
		author: "Emily Bronte",
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: "On the shortness of Life",
		author: "seneca",
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
];

console.log("objects Challenge");

console.log("Default library: ", library);

for (let i = 0; i < library.length; i++) {
	library[i].status.read = true;
}

console.log("Updated library: ", library);

const { title: firstBook } = library[0];

console.log(firstBook);

const strLibrary = JSON.stringify(library);

console.log(strLibrary);
