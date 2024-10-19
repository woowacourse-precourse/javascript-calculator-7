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

			// ('\\n'을 실제 개행문자로 변환)
			let cleanedInput = input.replace('\\n', '\n');

			/// 4. 기본 구분자 설정
			let delimiters = [',', ':'];

			// 5. 문자열에서 추출한 숫자들을 담을 변수
			let numArr = cleanedInput;

			// 6. 커스텀 구분자 체크
			if (input.startsWith('//')) {
				// 6-1. 커스텀 구분자가 //, \n 사이에 제대로 정의되었는지 확인
				const customDelimiterEnd = cleanedInput.indexOf('\n');
				if (customDelimiterEnd === -1) {
					throw new Error('[ERROR] 커스텀 구분자가 정의되지 않았습니다.');
				}

				// 6-2 커스텀 구분자가 제대로 정의되었을 경우 구분자 배열에 추가
				const customDelimiter = cleanedInput.substring(2, customDelimiterEnd);
				delimiters.push(customDelimiter);
				numArr = cleanedInput.substring(customDelimiterEnd + 1);
			}

			// 7. 구분자 배열을 정규식으로 통합
			const regex = new RegExp(`[${delimiters.join('')}]`);

			// 8. 정의된 구분자를 통해 분리 후 숫자로 변환
			numArr = numArr.split(regex).map((v) => Number(v));

			// 결과 출력
			const result = numArr.reduce((acc, cur) => acc + cur, 0);
			Console.print(`결과 : ${result}`);
		} catch (error) {
			// 에러 메시지 출력
			Console.print(`[ERROR] ${error.message}`);
			throw error;
		}
	}
}

export default App;
