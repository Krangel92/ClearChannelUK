const logicTest = () => {
	var sampleInput = gets();
	var sampleInputLength = sampleInput.length;
	// Put the given string in an array separated by commas:
	let charArr = sampleInput.split("");
	// define what vowels are:
	let vowels = new Set(["a", "e", "i", "o", "u"]);
	// set an empty array for the result:
	let result = [];

	// Proceed just if the length of the string is smaller than 100 and grater than 1
	if (1 < sampleInputLength < 100) {
		// iterate through the array:
		for (let i = 0; i < charArr.length - 1; i++) {
			// checking if the character in that index is a vowel and the one next to it is not:
			if (vowels.has(charArr[i]) && !vowels.has(charArr[i + 1])) {
				// swap them:
				[charArr[i], charArr[i + 1]] = [charArr[i + 1], charArr[i]];
				// otherwise, don't swap:
			} else {
				[charArr[i], charArr[i + 1]] = [charArr[i], charArr[i + 1]];
			}
		}
	}
	// convert it back to a string after swaping:
	result = charArr.join("");
	console.log(result);
};

const gets = () => {
	return "auehib";
};

logicTest();
