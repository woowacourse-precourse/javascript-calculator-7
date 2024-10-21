import { PATTERN, ERROR_MESSAGES } from '../../constants/constants.js';
import { extractCustomSeparator } from '../../utils/extractCustomSeparator.js';

export const isValidCustomSeparatorDeclaration = (input) => {
	if (!isValidInput(input)) {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}
	const matches = captureCustomSeparators(input);

	validateMatches(matches, input);
	return true;
};

const validateMatches = (matches, input) => {
	if (hasMultipleDeclarations(matches)) {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}
	if (matches.length > 0 && !isDeclarationComplete(input)) {
		throw new Error(ERROR_MESSAGES.INVALID_INPUT);
	}
};
const isValidInput = (input) => {
	return input && typeof input === 'string';
};

const captureCustomSeparators = (input) => {
	const matches = [...input.matchAll(PATTERN)];
	return matches.map((match) => extractCustomSeparator(match[1]));
};

const hasMultipleDeclarations = (matches) => {
	return matches && matches.length > 1;
};

const isDeclarationComplete = (input) => {
	const lines = input.split('\n');
	let declarationEnded = false;

	return lines.every((line) => {
		if (isDeclarationLine(line)) {
			return handleDeclarationLine(declarationEnded);
		}
		return true;
	});
};

const handleDeclarationLine = (declarationEnded) => {
	if (declarationEnded) {
		return false;
	}
	return true;
};

const isDeclarationLine = (line) => /^\/\//.test(line);
