// src/models/validations/isEmptyInput.js
export const isEmptyInput = (input) => {
	if (typeof input !== 'string') {
		return false;
	}

	return input.trim() === '';
};
