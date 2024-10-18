import { handleError } from './HandleError.js';

export const extractCustomSeparators = (input) => {
	const separators = [];
	let remainingInput = input;

	while (hasCustomSeparator(remainingInput)) {
		const match = getCustomSeparator(remainingInput);
		if (match) {
			separators.push(match[1]);
			remainingInput = removeCapturedSeparator(remainingInput, match);
		} else {
			handleError('Invalid separator format.');
		}
	}

	return separators;
};

const hasCustomSeparator = (input) => /^\/\/(.*?)\n/.test(input);

const getCustomSeparator = (input) => input.match(/^\/\/(.*?)\n/);

const removeCapturedSeparator = (input, match) => input.slice(match[0].length);
