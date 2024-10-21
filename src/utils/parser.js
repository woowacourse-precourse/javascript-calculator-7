// src/utils/parser.js
import { escapeRegExp } from './escapeRegExp.js';

export const createSeparatorRegex = (separators) =>
	new RegExp(separators.map(escapeRegExp).join('|'), 'g');

export const parsingWithSeparators = (input, separators) => {
	const regex = createSeparatorRegex(separators);
	return input.split(regex);
};

export const parsingNumberPart = (input) => {
	return input.replace(/^\/\/.*?((?:\r?\n)|\\n)/, '');
};
