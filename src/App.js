import { Console } from '@woowacourse/mission-utils';

const MESSAGE = {
	INPUT_MESSAGE: '덧셈할 문자열을 입력해 주세요.\n',
};

class App {
	constructor() {
		this.seperators = [',', ':'];
		this.numbers = [];
	}

	async userInput() {
		const input = await Console.readLineAsync(MESSAGE.INPUT_MESSAGE);
		return input;
	}

	async run() {
		this.userInput();
	}
}

export default App;
