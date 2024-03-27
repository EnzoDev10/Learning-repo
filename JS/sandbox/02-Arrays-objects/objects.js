// Objects Literal
// A common data structure that holds key/value pairs
// Kinds of similar to a dictionary in python

let y;

const person = {
	name: " John Doe",
	age: 30,
	isAdmin: true,
	// Objects can also be nested
	address: {
		street: "123 main st",
		city: "Boston",
		state: "ma",
	},
	// You can also use arrays
	hobbies: ["music", "sports"],
};

// ways to access a value.
y = person.age;
y = person["age"];

y = person.address.city;
y = person.hobbies[0];

person.name = "Jane Doe"; // Values can also be changed
person["isAdmin"] = false;

delete person.age; // Keys can be deleted

person.hasChildren = true; // You can also create new keys

// an object can have functions inside them
// To access a key inside another key use the "this" keyword.

person.greet = function () {
	console.log(`hello, My name is ${this.name}`);
};

person.greet();

// Operator & Methods

const obj1 = { a: 1, b: 2 };

const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
// The keys of multiple objects can also be combined into one through spread syntax.

y = obj3;

const obj4 = Object.assign({}, obj1, obj2);
// You can also combined objects into one through the assign method.
// In this case obj1 and obj2 are combined into an empty object.
// Keep in mind that this also works with objects that have keys.

y = obj4;

const todos = [
	{ id: 1, name: "Buy Milk" },
	{ id: 2, name: "Pickup kids from school" },
	{ id: 3, name: "Take out trash" },
];

y = todos[0].name; // accessing a value of an object inside an array.

y = Object.keys(todos); // .keys creates an array with the keys of an object

y = Object.values(todos); // Creates an array with the values of an object

y = Object.entries(todos);
// Creates an array of arrays that each
//contain one of the key value pairs.

y = person.hasOwnProperty("age"); // Checks if the arg is a property of the object

// Destructuring & Naming

let firstName = "John";
let lastName = "Doe";
let age = 30;

// If a key is called the same as a variable,
// you can skip writing the value as it becomes equal to the variable value.
let personTwo = {
	firstName,
	lastName,
	age,
};

// Destructuring

// Unpacking values from arrays, or properties from objects
// into distinct variables

let todo = {
	id: 1,
	title: "Take out trash",
	user: {
		name: "John",
	},
};

// Now there are variables named after the properties which you can access
let {
	id: todoId,
	title,
	user: { name },
} = todo;

// destructure arrays

let numbersTwo = [23, 67, 33, 49];


// Values from numbers get unpack into variables.
// The first two numbers get unpacked into their corresponding vars.
// and the rest get unpacked into an array called rest.
// To unpack the rest of the values we use the rest operator "...".
let [first, second, ...rest] = numbers; 


//console.log(y);
