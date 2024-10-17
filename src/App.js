import { Console } from '@woowacourse/mission-utils';

const MESSAGE = {
	INPUT_MESSAGE: '덧셈할 문자열을 입력해 주세요.\n',
	END_MESSAGE: '결과 : ',
	ERROR_MESSAGE: '[ERROR] ',
};

const ERROR = {
	empty: '데이터를 입력하지 않았습니다.',
	notNumber: '계산할 값은 0~9 사이의 숫자만 입력할 수 있습니다.',
	whitespace: '공백을 사용할 수 없습니다.',
	negative: '음수를 입력할 수 없습니다.',
};

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
			this.validateNumber(num);
			this.numbers.push(num);
		}
		return true;
	}

	sumNumbers() {
		return this.numbers.reduce((acc, curr) => acc + curr, 0);
	}

	printEndMessage() {
		let sum = this.sumNumbers();
		Console.print(MESSAGE.END_MESSAGE + sum);
	}

	printErrorMessage(errorCode) {
		throw new Error(MESSAGE.ERROR_MESSAGE + ERROR[errorCode]);
	}

	validateInput(string) {
		if (string.length < 1 || /^\s*$/.test(string)) {
			this.printErrorMessage('empty');
		}

		if (/\s/.test(string)) {
			this.printErrorMessage('whitespace');
		}
	}

	validateNumber(n) {
		if (!Number.isInteger(n)) {
			this.printErrorMessage('notNumber');
		}

		if (n > 9) {
			this.printErrorMessage('notNumber');
		}

		if (n < 0) {
			this.printErrorMessage('negative');
		}
	}

	async run() {
		const input = await this.userInput();
		this.validateInput(input);

		if (this.checkCustomSeparator(input)) {
			this.updateCustomSeparator(input);
		}

		this.updateNumberFromString(input);
		this.printEndMessage();
	}
}

export default App;
