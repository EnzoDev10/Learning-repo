// Dates and times
let d;

d = new Date(); // Returns a date. If left blank returns todays date.

d = d.toString(); // Converts the date to a string

d = new Date(2021, 6, 10, 12, 30, 0); // A date can be given too in the YYYY/MM/DD/HH/MI/SS format.
// Months go from 0 to 11.

d = new Date("07/10/2021 12:30:00"); // You can also use strings to pass dates.
// Months go from 1 to 12.

d = Date.now(); // returns the miliseconds that have passed since january 1 of 1970

d = new Date("07-10-2022");

d = d.getTime(); // Returns the miliseconds that have passed since january 1 of 1970 to the date previously chosen.

d = new Date(1666962049745); // Dates can also be given through miliseconds

d = Math.floor(Date.now() / 1000); // Get seconds out of a date

console.log(d);

// Methods
let x;

let da = new Date();

x = da.getFullYear(); // returns year.

x = da.getMonth(); // Returns the month. It is zero based so add 1 to make it correct.

x = da.getDate(); // Returns the day of the month.

x = da.getDay(); // Returns the day of the week.

x = da.getHours(); // Returns the hours.

x = da.getMinutes(); // Returns the minutes.

x = da.getSeconds(); // Returns the seconds.

x = Intl.DateTimeFormat("en-US").format(d); // Changes the date to the format passed as an argument.

x = da.toLocaleString("default", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZone: "America/New_York",
}); // Formats the different parts of a date

console.log(x);
