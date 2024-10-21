import { ERROR_MESSAGES } from '../../constants/constants.js';

export const isValidInputType = (input) => {
	if (input === undefined || input === null) {
		throw new TypeError(ERROR_MESSAGES.INVALID_TYPE);
	}
};
