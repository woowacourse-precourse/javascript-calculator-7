import { Console } from '@woowacourse/mission-utils';
import validateAnswer from './validator.js';
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
				//커스텀 구분자
				const delimiter = answer.substring(2, 3);
				const numbers = answer.split('\\n')[1].split(delimiter);
				const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
				Console.print(`결과 : ${sum}`);
			} else {
				if (!validateAnswer(answer)) {
					throw new Error(`[ERROR] : 사용자가 잘못된 값 입력`);
				}
				//일반 구분자
				const numbers = answer.split(/[:,]/);
				const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
				Console.print(`결과 : ${sum}`);
			}
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

export default App;
