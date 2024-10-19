import { Console } from '@woowacourse/mission-utils';

class App {
	async run() {
		try {
			// 1. 사용자 입력 받기
			const input = await Console.readLineAsync(
				'덧셈할 문자열을 입력해주세요.\n'
			);

			// 2. 잘못된 입력 에러 처리
			if (typeof input !== 'string') {
				throw new Error('[ERROR] 유효하지 않은 입력입니다.');
			}

			// 3. 빈 문자열이거나 null인 경우 '결과: 0' 출력
			if (input.trim() === '' || input == null) {
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
			Console.print(`[ERROR] ${error.message}`);
			throw error;
		}
	}
}

export default App;
