const reverseString = function (string) {
	let charArray = [];
	for (let i = string.length; i >= 0; i--) {
		charArray.push(string[i]);
	}
    return charArray.join("");
	
};

// Do not edit below this line
module.exports = reverseString;
