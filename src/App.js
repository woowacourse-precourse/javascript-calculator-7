import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';
import { throwError } from './utils/throwError.js';

class App {
	async run() {
		try {
			const input = await this.#getUserInput();
			const calculator = new Calculator(input);
			const sum = calculator.calculate();
			this.#printResult(sum);
		} catch (err) {
			throwError(err);
		}
	}

	async #getUserInput() {
		return Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
	}

	#printResult(result) {
		Console.print(`결과 : ${result}`);
	}
}

export default App;
