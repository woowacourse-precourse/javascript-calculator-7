import { Console } from '@woowacourse/mission-utils';
import { hasNegative } from './utils/hasNegative.js';
import { isEmptyOrNull } from './utils/isEmptyOrNull.js';
import { splitByCustomSeparator } from './utils/splitByCustomSeparator.js';
import { splitByDefaultSeparators } from './utils/splitByDefaultSeparators.js';

class App {
	constructor() {
		this.input = '';
		this.result = 0;
	}

	async run() {
		try {
			await this.getUserInput();
			this.checkForNegativeInput();
			this.parseAndSplitInput();
			this.handleArrayResult();
			this.printResult();
		} catch (err) {
			this.handleError(err);
		}
	}

	async getUserInput() {
		this.input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');
	}

	checkForNegativeInput() {
		hasNegative(this.input);
	}

	parseAndSplitInput() {
		if (isEmptyOrNull(this.input)) {
			this.result = 0;
		} else if (this.input.startsWith('//')) {
			this.result = splitByCustomSeparator(this.input);
		} else {
			this.result = splitByDefaultSeparators(this.input);
		}
	}

	handleArrayResult() {
		if (Array.isArray(this.result)) {
			if (this.result[0] === this.input) {
				throw new Error('[ERROR]: 구분자와 양수로 이루어진 값을 입력해주세요.');
			}
			this.result = this.calculateSum(this.result);
		}
	}

	calculateSum(result) {
		let sum = 0;
		for (const v of result) {
			if (isNaN(v)) {
				throw new Error('[ERROR]: 입력값에 숫자 이외의 값이 포함되어 있어요.');
			}
			sum += +v;
		}
		return sum;
	}

	printResult() {
		Console.print(`결과 : ${this.result}`);
	}

	handleError(err) {
		throw new Error(err);
	}
}

export default App;
