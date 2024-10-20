// src/models/validations/isValidNumbers.js
import { ERROR_MESSAGES } from '../../constants/contants.js';

export const isValidNumbers = (input, separators) => {
	validateInput(input, separators);

	if (input.trim() === '') {
		return true;
	}

	const numbers = splitInput(input, separators);

	validateNumbers(numbers);
	return true;
};

const validateInput = (input, separators) => {
	if (typeof input !== 'string') {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}

	if (!Array.isArray(separators)) {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}
};

const validateNumbers = (numbers) => {
	if (numbers.some((num) => num.trim() === '')) {
		throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
	}

	checkTargetIsValidNum(numbers);
};

const splitInput = (input, separators) => {
	const escapedSeparators = separators.map((sep) => escapeRegExp(sep));
	const pattern = escapedSeparators.join('|');
	const regex = new RegExp(pattern, 'g');
	return input.split(regex);
};

const escapeRegExp = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const checkTargetIsValidNum = (numbers) => {
	numbers.forEach((number) => {
		if (!isPositiveIntegerOrZero(number)) {
			throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
		}
	});
};

const isPositiveIntegerOrZero = (input) => {
	return /^\d+$/.test(input);
};
