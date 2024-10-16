import { Console } from '@woowacourse/mission-utils';

const MESSAGE = {
	INPUT_MESSAGE: '덧셈할 문자열을 입력해 주세요.\n',
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

	async run() {
		const input = await this.userInput();
		if (this.checkCustomSeparator(input)) {
			this.updateCustomSeparator(input);
		}
	}
}

export default App;
