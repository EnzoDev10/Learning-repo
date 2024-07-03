const removeFromArray = function (arr, ValueToRemove) {
	// Creates an array from the arguments
	let argumentArray = Array.from(arguments);
	let filteredArray = [];
	// checks each element and if it finds that it doesn't exists
	// inside the args array, adds it to a new array
	filteredArray = arr.filter((e) => !argumentArray.includes(e));

	return filteredArray;
};
// Do not edit below this line
module.exports = removeFromArray;
