import { Console } from '@woowacourse/mission-utils';
import { hasNegative } from './utils/hasNegative.js';
import { isEmptyOrNull } from './utils/isEmptyOrNull.js';
import { splitByCustomSeparator } from './utils/splitByCustomSeparator.js';
import { splitByDefaultSeparators } from './utils/splitByDefaultSeparators.js';

class App {
	async run() {
		try {
			const res = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');
			let answer = null;

			hasNegative(res);

			if (isEmptyOrNull(res)) {
				answer = 0;
			} else if (res.startsWith('//')) {
				answer = splitByCustomSeparator(res);
			} else {
				answer = splitByDefaultSeparators(res);
			}

			if (Array.isArray(answer)) {
				if (answer[0] === res) {
					throw new Error('[ERROR]: 구분자와 양수로 이루어진 값을 입력해주세요.');
				}
				let sum = 0;
				for (const v of answer) {
					if (isNaN(v)) {
						throw new Error('[ERROR]: 입력값에 숫자 이외의 값이 포함되어 있어요.');
					}
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
