import { isValidInputType } from './isValidInputType.js';
import { isValidCustomSeparatorDeclaration } from './isValidCustomSeparatorDeclaration.js';
import { isValidNumbers } from './isValidNumbers.js';

export class InputValidator {
	static validateStrings(input) {
		isValidInputType(input);
		isValidCustomSeparatorDeclaration(input);
	}
	static validateNumbers(numbers) {
		isValidNumbers(numbers);
	}
}
