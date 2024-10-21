import { Console } from '@woowacourse/mission-utils';
import StringCalculator from './StringCalculator.js';

class App {
  run() {
    Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
      .then((input) => {
        const stringCalculator = new StringCalculator();
        try {
          // 1. 입력값에 대한 사전 처리
          if (!input || input.trim() === '') {
            throw new Error('[ERROR] 입력값이 유효하지 않습니다.');
          }

          // 2. 입력값에서 \\n을 실제 개행문자 \n으로 변환
          const sanitizedInput = input.replace(/\\n/, "\n").trim();

          // 3. 문자열 계산기 실행
          const result = stringCalculator.add(sanitizedInput);

          // 4. 결과 출력
          Console.print(`결과 : ${result}`);
        } catch (error) {
          // 5. 에러 메시지 출력
          Console.print(`[ERROR] ${error.message}`);
        }
      });
  }
}

export default App;
