import { Console } from '@woowacourse/mission-utils';
import validateAnswer from './validator.js';
import customDelimiter from './customDelimiter.js';
import delimiter from './delimiter.js';
class App {
	async run() {
		const answer = await Console.readLineAsync(
			`덧셈할 문자열을 입력해 주세요.\n`
		);
		if (answer.includes('-')) {
			throw new Error('[ERROR] : 음수입니다.');
		}
		try {
			if (answer.trim() === '') {
				Console.print(`결과: 0`);
			} else if (answer.startsWith('//')) {
				customDelimiter(answer);
			} else {
				if (!validateAnswer(answer)) {
					throw new Error(`[ERROR] : 사용자가 잘못된 값 입력`);
				}
				delimiter(answer);
			}
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

export default App;
