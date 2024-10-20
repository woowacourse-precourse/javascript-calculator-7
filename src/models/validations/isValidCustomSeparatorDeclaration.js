// isValidCustomSeparatorDeclaration.js

import { PATTERN, ERROR_MESSAGES } from '../../constants/contants.js';

export const isValidCustomSeparatorDeclaration = (input) => {
	const matches = captureCustomSeparators(input);
	if (hasMultipleSeparators(matches)) {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}
	if (isIncompleteDeclaration(input, matches)) {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}
	return true;
};

const captureCustomSeparators = (input) => {
	const regex = new RegExp(PATTERN, 'g');
	const matches = input.match(regex);
	if (!matches) return [];
	return matches.map((match) => {
		const separatorMatch = match.match(new RegExp(PATTERN));
		return separatorMatch[1];
	});
};

const hasMultipleSeparators = (matches) => {
	return matches && matches.length > 1;
};

const isIncompleteDeclaration = (input, matches) => {
	const hasNoMatches = !matches || matches.length === 0;
	return (
		hasNoMatches && input.startsWith('//') && !isDeclarationComplete(input)
	);
};

const isDeclarationComplete = (input) => {
	return PATTERN.test(input);
};
