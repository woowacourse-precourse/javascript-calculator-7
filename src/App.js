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

			// 2. 결과 출력
			Console.print(`결과 : ${input}`);
		} catch (error) {
			Console.print(error.message);
		}
	}
}

export default App;
