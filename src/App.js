import {Console} from '@woowacourse/mission-utils';

class App {
	async run() {
		const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
		const result = this.handleString(input);
		Console.print(`결과 값 : ${result}`);
	}

	// 문자열을 처리함수
	handleString(input) {
		// 기본 구분자 할당
		let delimiter = /,|:/;
		let values = input;

		// 커스텀 구분자 처리
		const customDelimiterPattern = /^\/\/(.)\\n/;
		const match = input.match(customDelimiterPattern);
		if (match) {
			delimiter = new RegExp(match[1]);
			values = input.split('\\n')[1];
		}

		// 숫자와 구분자로 구성된 문자열을 구분자로 분리하고 숫자로 변환
		const valueArray = values.split(delimiter).map(Number);

		// 에러 처리: 음수가 있을 경우 에러 발생
		valueArray.forEach(num => {
			if (num < 0) {
				throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
			}
		});

		// 숫자들의 합을 반환
		return valueArray.reduce((sum, num) => sum + num, 0);
	}
}

export default App;
