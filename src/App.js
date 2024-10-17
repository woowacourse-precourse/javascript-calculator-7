import { Console } from '@woowacourse/mission-utils';

class App {
	async run() {
		try {
			// 1. 사용자 입력 받기
			const input = await Console.readLineAsync(
				'덧셈할 문자열을 입력해주세요.\n'
			);

			// 2. 빈 문자열 처리
			if (input === '') {
				Console.print('결과 : 0');
				return;
			}

			let delimiters;
			let numArr;

			// 3. 커스텀 및 기본 구분자 체크
			if (input.startsWith('//')) {
				delimiters = input[2];
				numArr = input
					.substring(5)
					.split(delimiters)
					.map((v) => +v);
			} else {
				delimiters = /,|;/;
				numArr = input.split(delimiters).map((v) => +v);
			}

			// 4. 결과 출력
			const result = numArr && numArr.reduce((acc, cur) => acc + cur, 0);
			Console.print(`결과 : ${result}`);
		} catch (error) {
			Console.print(error.message);
		}
	}
}

export default App;
