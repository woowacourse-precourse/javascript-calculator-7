import {Console} from '@woowacourse/mission-utils';

class App {
	async run() {
		const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
		const {values, delimiter} = this.handleString(input);
		Console.print(`결과 값 : ${values} 구분자:${delimiter}`);
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
		return {values, delimiter};
	}
}

export default App;
