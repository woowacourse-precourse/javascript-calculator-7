import { splitByCustomSeparator } from './utils/splitByCustomSeparator.js';
import { splitByDefaultSeparators } from './utils/splitByDefaultSeparators.js';
import Validator from './Validator.js';

class Calculator {
	#input = '';
	#result = 0;

	constructor(value) {
		this.#input = value;
	}

	calculate() {
		Validator.checkNegativeInput(this.#input);
		this.#parseAndSplitInput();
		Validator.checkSplitResult(this.#input, this.#result);
		return this.#calculateSum(this.#result);
	}

	#parseAndSplitInput() {
		if (this.#input.startsWith('//')) {
			const result = splitByCustomSeparator(this.#input);
			Validator.checkResultNull(result);
			this.#result = result;
		} else {
			this.#result = splitByDefaultSeparators(this.#input);
		}
	}

	#calculateSum(result) {
		let sum = 0;
		for (const v of result) {
			sum += +v;
		}
		return sum;
	}
}

export default Calculator;
