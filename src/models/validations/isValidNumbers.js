import { ERROR_MESSAGES } from '../../constants/constants.js';

export const isValidNumbers = (input) => {
	if (!Array.isArray(input)) {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}
	validateNumbers(input);
	return true;
};

const validateNumbers = (input) => {
	input.forEach((num) => {
		if (!isPositiveIntegerOrZero(num)) {
			throw new Error('[ERROR]');
		}
	});
};

const isPositiveIntegerOrZero = (input) => {
	if (typeof input !== 'string' && typeof input !== 'number') {
		return false;
	}

	if (typeof input === 'number') {
		return Number.isInteger(input) && input >= 0;
	}

	return /^\d+$/.test(input);
};
