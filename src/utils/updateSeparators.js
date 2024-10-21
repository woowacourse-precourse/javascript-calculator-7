import { extractCustomSeparator } from './extractCustomSeparator.js';

export const updateSeparators = (input, separators) => {
	const customSeparator = extractCustomSeparator(input);
	if (customSeparator) {
		separators.push(customSeparator);
	}
	return separators;
};
