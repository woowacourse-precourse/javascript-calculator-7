import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';
import { isEmptyOrNull } from './utils/isEmptyOrNull.js';
import { throwError } from './utils/throwError.js';

class App {
	#sum;
	#input;
	async run() {
		try {
			this.#input = await this.#getUserInput();
			this.#checkIsEmptyAndCalculate();
			this.#printResult();
		} catch (err) {
			throwError(err);
		}
	}

	async #getUserInput() {
		const USER_INPUT = await Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
		return USER_INPUT.trim();
	}

	#checkIsEmptyAndCalculate() {
		if (isEmptyOrNull(this.#input)) {
			this.#sum = 0;
		} else {
			const CALCULATOR = new Calculator(this.#input);
			this.#sum = CALCULATOR.calculate();
		}
	}

	#printResult() {
		Console.print(`결과 : ${this.#sum}`);
	}
}

export default App;
