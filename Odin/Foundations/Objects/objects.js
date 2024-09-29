// * JavaScript.info tasks
/*  1)
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. 
 */

let obj = {};

obj.name = 'John';
obj.surname = 'Smith';
obj.name = 'Pete';
delete obj.name;

//console.log(obj);

/* 2)
Write the function isEmpty(obj) which returns true
if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
	// If you can iterate on the object it means
	// that it has atleast one key
	for (const key in obj) {
		return false;
	}
	return true;
}

let schedule = {};

//console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';

//console.log(isEmpty(schedule));

// 3) We have an object storing salaries of out team:

let salaries = {
	john: 100,
	Ann: 160,
	Pete: 130,
};

// Write the code to sum all salaries and store it in the variable sum. Should be 390 in the example above.

function sumSalaries(salaries) {
	if (isEmpty(salaries)) {
		return 0;
	} else {
		// Note: could be simpler with just the part that come after this
		let sum = 0;
		for (salary in salaries) {
			sum += salaries[salary];
		}
		return sum;
	}
}
//console.log(sumSalaries(salaries));

/* 4) Create function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
for instance: */

// before the call
let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

// multiplyNumeric(menu);

// after the call
/* menu = {
	width: 400,
	height: 600,
	title: 'My menu',
}; */

function multiplyNumeric(obj) {
	for (const key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2;
		}
	}
}

multiplyNumeric(menu);
//console.log(menu);

// * MDN Example code
const person = {
	name: {
		first: 'Bob',
		last: 'Smith',
	},
	age: 32,
	bio() {
		console.log(
			`${this.name.first} ${this.name.last} is ${this.age} years old. `
		);
	},
	introduceSelf() {
		console.log(`Hi I'm ${this.name.first}.`);
	},
};
person.name;
person.name[0];
person.age;
//person.bio();
// "Bob Smith is 32 years old."
//person.introduceSelf();
// "Hi! I'm Bob."

function logProperty(propertyName) {
	console.log(person[propertyName]);
}

//logProperty('name');
//logProperty('age');

person.age = 45;
person['name']['last'] = 'Cratchit';

person['eyes'] = 'hazel';
person.farewell = function () {
	console.log('Bye everybody!');
};

const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

function createPerson(name) {
	const obj = {};
	obj.name = name;
	obj.introduceSelf = function () {
		console.log(`Hi! I'm ${this.name}.`);
	};
	return obj;
}

function Person(name) {
	this.name = name;
	this.introduceSelf = function () {
		console.log(`Hi i'm ${this.name}.`);
	};
}
const salva = new Person('Salva');
salva.introduceSelf();

function CreateCat(name, breed, color) {
	const cat = {
		name,
		breed,
		color,
		greeting() {
			console.log(`Hello, said ${this.name} the ${this.breed}. `);
		},
	};
	return cat;
}

let cat1 = new CreateCat('Bertie', 'Cymric', 'White');
let cat2 = new CreateCat('Franklin', 'Syamese', 'Black and White');
cat1.greeting();
cat2.greeting();
