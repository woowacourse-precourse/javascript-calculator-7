import { Console } from '@woowacourse/mission-utils';

class App {
	async run() {
		try {
			const res = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');

			Console.print(`결과 : ${res}`);
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default App;
