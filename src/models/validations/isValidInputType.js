import { ERROR_MESSAGES } from '../../constants/constants.js';

export const isValidInputType = (input) => {
	if (input === undefined || input === null || typeof input === Object) {
		throw new TypeError(ERROR_MESSAGES.INVALID_TYPE);
	}
};
