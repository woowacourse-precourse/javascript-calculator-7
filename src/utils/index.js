const checkWhiteSpace = (string) => {
	return /\s/.test(string);
};

const checkNoData = (string) => {
	return string.length < 1 || /^\s*$/.test(string);
};

export const validateInput = (string) => {
	if (checkNoData(string)) {
		return 'empty';
	}

	if (checkWhiteSpace(string)) {
		return 'whitespace';
	}
	return true;
};

const checkNotNumber = (number) => {
	return !Number.isInteger(number);
};

const checkNumberOverNine = (number) => {
	return number > 9;
};

const checkNegativeNumber = (number) => {
	return number < 0;
};

export const validateNumber = (number) => {
	if (checkNotNumber(number) || checkNumberOverNine(number)) {
		return 'notNumber';
	}

	if (checkNegativeNumber(number)) {
		return 'negative';
	}
	return true;
};
