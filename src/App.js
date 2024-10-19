import { Console } from '@woowacourse/mission-utils';
import { hasNegative } from './utils/hasNegative.js';
import { isEmptyOrNull } from './utils/isEmptyOrNull.js';
import { splitByCustomSeparator } from './utils/splitByCustomSeparator.js';
import { splitByDefaultSeparators } from './utils/splitByDefaultSeparators.js';

class App {
	#input = '';
	#result = 0;

	async run() {
		try {
			await this.#getUserInput();
			this.#validateNegativeInput();
			this.#parseAndSplitInput();
			this.#handleArrayResult();
			this.#printResult();
		} catch (err) {
			this.#throwError(err);
		}
	}

	async #getUserInput() {
		this.#input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');
	}

	#checkForNaN(value) {
		return value.some((v) => isNaN(v));
	}

	#validateNegativeInput() {
		if (hasNegative(this.#input)) {
			this.#throwError('[ERROR] : 양수만 입력할 수 있어요.');
		}
	}

	#validateArrayInput() {
		if (this.#result[0] === this.#input) {
			this.#throwError('[ERROR] : 구분자와 양수로 이루어진 값을 입력해주세요.');
		}
		if (this.#checkForNaN(this.#result)) {
			this.#throwError('[ERROR] : 입력값에 숫자 이외의 값이 포함되어 있어요.');
		}
	}

	#parseAndSplitInput() {
		if (isEmptyOrNull(this.#input)) {
			this.#result = 0;
		} else if (this.#input.startsWith('//')) {
			this.#result = splitByCustomSeparator(this.#input);
		} else {
			this.#result = splitByDefaultSeparators(this.#input);
		}
	}

	#handleArrayResult() {
		if (Array.isArray(this.#result)) {
			this.#validateArrayInput();
			this.#result = this.#calculateSum(this.#result);
		}
	}

	#calculateSum(result) {
		let sum = 0;
		for (const v of result) {
			sum += +v;
		}
		return sum;
	}

	#printResult() {
		Console.print(`결과 : ${this.#result}`);
	}

	#throwError(err) {
		throw new Error(err);
	}
}

export default App;
