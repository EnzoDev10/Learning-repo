const sumAll = function (firstNum, secondNum) {
	let min;
	let max;
	switch (true) {
		case firstNum < 0 ||
			secondNum < 0 ||
			typeof firstNum != "number" ||
			typeof secondNum != "number":
			return "ERROR";

		case firstNum > secondNum:
			min = secondNum;
			max = firstNum + 1;
			break;

		default:
			min = firstNum;
			max = secondNum + 1;
			break;
	}

	let total = 0;
	for (let i = min; i < max; i++) {
		total += i;
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
