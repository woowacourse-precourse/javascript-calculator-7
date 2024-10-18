import { Console } from '@woowacourse/mission-utils';
import { isEmptyOrNull } from './utils/isEmptyOrNull.js';
import { splitByCustomSeparator } from './utils/splitByCustomSeparator.js';
import { splitByDefaultSeparators } from './utils/splitByDefaultSeparators.js';

class App {
	async run() {
		try {
			const res = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');
			let answer = null;

			if (isEmptyOrNull(res)) {
				answer = 0;
			} else if (res.startsWith('//')) {
				answer = splitByCustomSeparator(res);
			} else {
				answer = splitByDefaultSeparators(res);
			}

			if (Array.isArray(answer)) {
				let sum = 0;
				for (const v of answer) {
					sum += +v;
				}
				answer = sum;
			}

			Console.print(`결과 : ${answer}`);
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default App;
