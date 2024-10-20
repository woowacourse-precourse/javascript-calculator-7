// src/controllers/InputController.js

import { InputValidator } from '../models/validations/InputValidator';
import { Parser } from '../models/Parser';
import { extractCustomSeparator } from '../models/utils/extractCustomSeparator'; // 유틸리티 함수 임포트

export class InputController {
	constructor(input, separators = [',', ':']) {
		this.input = input;
		this.separators = separators;
		this.numbersPart = null;
		this.inputValidator = new InputValidator();
		this.parser = new Parser(this.input, this.separators);
	}

	validateInput() {
		let customSeparator = this.getCustomSeparator();
		this.updateSeparators(customSeparator);
		this.numbersPart = this.parser.extractNumbersPart();

		if (
			this.inputValidator.validateNumbers(this.numbersPart, this.separators)
		) {
			return this.parser.parse(customSeparator);
		}

		throw new Error('Invalid input');
	}

	getCustomSeparator() {
		if (this.inputValidator.validateCustomSeparator(this.input)) {
			return extractCustomSeparator(this.input);
		}
		return null;
	}

	updateSeparators(customSeparator) {
		if (customSeparator) {
			const customSeparators = Array.isArray(customSeparator)
				? customSeparator
				: [customSeparator];
			this.separators = [...this.separators, ...customSeparators];
		}
	}

	parseInput() {
		return this.validateInput();
	}
}
