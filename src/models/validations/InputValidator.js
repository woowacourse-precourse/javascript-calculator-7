// models/InputValidator.js

import { isValidNumbers } from './isValidNumbers.js';
import { isValidCustomSeparatorDeclaration } from './isValidCustomSeparatorDeclaration.js';
import { extractCustomSeparator } from '../utils/extractCustomSeparator.js';

export class InputValidator {
	constructor(input) {
		this.input = input;
		this.separators = [',', ':'];
	}

	validateCustomSeparator(input) {
		return isValidCustomSeparatorDeclaration(input);
	}

	getCustomSeparator(input) {
		return extractCustomSeparator(input);
	}

	combineSeparators(defaultSeparators, customSeparators) {
		return [...defaultSeparators, ...customSeparators];
	}

	extractNumbersPart(input) {
		if (input.startsWith('//')) {
			const index = input.indexOf('\n');
			return input.slice(index + 1);
		}
		return input;
	}

	validateNumbers(numbersPart, separators) {
		return isValidNumbers(numbersPart, separators);
	}

	validateInput() {
		this.validateCustomSeparator(this.input);
		const customSeparator = this.getCustomSeparator(this.input);
		let combinedSeparators;
		if (customSeparator) {
			combinedSeparators = this.combineSeparators(this.separators, [
				customSeparator,
			]);
		} else {
			combinedSeparators = this.combineSeparators(this.separators, []);
		}
		const numbersPart = this.extractNumbersPart(this.input);
		return this.validateNumbers(numbersPart, combinedSeparators);
	}
}
