const repeatString = function (string, nTimes) {
	if (nTimes < 0) {
		return "ERROR";
	}

	let repeatedString = "";
	for (let i = 0; i < nTimes; i++) {
		repeatedString = repeatedString + string;
	}
	return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
