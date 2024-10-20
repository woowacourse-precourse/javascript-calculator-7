import {Console} from '@woowacourse/mission-utils';

class App {
	async run() {
		const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
		const result = this.handleString(input);
		Console.print(`결과 : ${result}`);
	}

	// 문자열을 처리함수
	handleString(input) {
		// 빈 값일 경우 에러 발생
		if (!input.trim())
			throw new Error('[ERROR] 빈 문자열은 입력할 수 없습니다.');

		// 커스텀 구분자 처리
		const {values, delimiter} = this.checkDelimiter(input);

		// 숫자들의 합을 반환
		return this.stringToNumber(values, delimiter).reduce(
			(sum, num) => sum + num,
			0,
		);
	}

	// 구분자 파악 함수
	checkDelimiter(input) {
		// 기본 구분자 할당
		let delimiter = /,|:/;
		let values = input;

		// 커스텀 구분자 처리
		const customDelimiterPattern = /^\/\/(.+)\\n/;
		const match = input.match(customDelimiterPattern);
		if (match) {
			if (!isNaN(match[1]))
				throw new Error('[ERROR] 구분자는 숫자가 될 수 없습니다.');
			delimiter = new RegExp(match[1]);
			values = input.split('\\n')[1];
		}

		return {values, delimiter};
	}

	// 문자열을 분리 후, 숫자로 변환하는 함수
	stringToNumber(values, delimiter) {
		// 숫자와 구분자로 구성된 문자열을 구분자로 분리하고 숫자로 변환
		const valueArray = values.split(delimiter).map(Number);

		// 에러 처리: 음수가 있을 경우 에러 발생
		valueArray.forEach(num => {
			if (num < 0) {
				throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
			}
		});

		return valueArray;
	}
}

export default App;
