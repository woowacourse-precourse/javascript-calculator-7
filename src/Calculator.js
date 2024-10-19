import { checkForNaN } from './utils/checkForNaN.js';
import { hasNegative } from './utils/hasNegative.js';
import { isEmptyOrNull } from './utils/isEmptyOrNull.js';
import { splitByCustomSeparator } from './utils/splitByCustomSeparator.js';
import { splitByDefaultSeparators } from './utils/splitByDefaultSeparators.js';
import { throwError } from './utils/throwError.js';

class Calculator {
	#input = '';
	#result = 0;

	constructor(value) {
		this.#input = value;
	}

	calculate() {
		this.#validateInput();
		this.#parseAndSplitInput();
		this.#validateSplitResult();
		return this.#calculateSum(this.#result);
	}

	#validateInput() {
		if (isEmptyOrNull(this.#input)) {
			return 0;
		}
		if (hasNegative(this.#input)) {
			throwError('[ERROR] : 양수만 입력할 수 있어요.');
		}
	}

	#validateSplitResult() {
		if (this.#result[0] === this.#input) {
			throwError('[ERROR] : 구분자와 양수로 이루어진 값을 입력해주세요.');
		}
		if (checkForNaN(this.#result)) {
			throwError('[ERROR] : 입력값에 숫자 이외의 값이 포함되어 있어요.');
		}
	}

	#parseAndSplitInput() {
		if (this.#input.startsWith('//')) {
			const result = splitByCustomSeparator(this.#input);
			if (result === null) {
				throwError('[ERROR] : 커스텀 구분자를 확인할 수 없어요.');
			}
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
