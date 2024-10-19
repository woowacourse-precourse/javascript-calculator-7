import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/index.js';
import { validateInput, validateNumber } from './utils/index.js';

class App {
	constructor() {
		this.separators = [',', ':'];
		this.numbers = [];
	}

	async userInput() {
		const input = await Console.readLineAsync(MESSAGE.INPUT_MESSAGE);
		return input;
	}
	checkCustomSeparator(string) {
		if (string.length >= 5) {
			const firstTwoChars = string.substring(0, 2);
			const nextThreeChars = string.substring(2, 5);

			return (
				firstTwoChars === '//' &&
				nextThreeChars[1] === '\\' &&
				nextThreeChars[2] === 'n'
			);
		}
		return false;
	}

	updateCustomSeparator(string) {
		const customSeparator = string[2];
		this.separators.push(customSeparator);
	}

	escapeRegExp(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	updateNumberFromString(string) {
		let userInput = string;

		const escapedSeparators = this.separators.map((sep) =>
			this.escapeRegExp(sep)
		);

		const regex = new RegExp(`[${escapedSeparators.join('')}]`);

		if (this.checkCustomSeparator(userInput)) {
			userInput = string.substr(5);
		}

		const numbers = userInput.split(regex);

		for (const n of numbers) {
			const num = Number(n);
			const isValidNumber = validateNumber(num);
			if (isValidNumber !== true) {
				this.printErrorMessage(isValidNumber);
			}
			this.numbers.push(num);
		}
		return true;
	}

	sumNumbers(numbers) {
		return numbers.reduce((acc, curr) => acc + curr, 0);
	}

	printEndMessage(sum) {
		Console.print(MESSAGE.END_MESSAGE + sum);
	}

	printErrorMessage(errorCode) {
		throw new Error(MESSAGE.ERROR_MESSAGE + ERROR[errorCode]);
	}

	async run() {
		const input = await this.userInput();
		const isValidInput = validateInput(input);
		if (isValidInput !== true) {
			this.printErrorMessage(isValidInput);
		}

		if (this.checkCustomSeparator(input)) {
			this.updateCustomSeparator(input);
		}

		this.updateNumberFromString(input);
		const sum = this.sumNumbers(this.numbers);
		this.printEndMessage(sum);
	}
}

export default App;
