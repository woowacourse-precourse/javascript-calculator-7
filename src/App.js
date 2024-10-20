import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    try {
      const result = this.processInput(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  processInput(input) {
    if (!input) {
      throw new Error('숫자를 입력해주세요.'); // 입력이 없는 경우 처리
    }

    let DELIMITER = ',|:'; // 기본 구분자 쉼표와 콜론
    if (input.startsWith('//')) {
      const parts = input.split('\n');
      DELIMITER = parts[0].slice(2); // 커스텀 구분자
      input = parts[1]; // 실제 숫자 문자열
    }

    // 구분자를 기준으로 문자열을 분리
    const numbers = input.split(new RegExp(DELIMITER)).map(num => num.trim());

    // 양수 확인 및 합계 계산
    let sum = 0;
    numbers.forEach(num => {
      const number = parseInt(num, 10);
      if (isNaN(number)) {
        throw new Error('숫자를 입력해주세요.'); // 숫자가 아닌 경우 처리
      }
      if (number < 0) {
        throw new Error('숫자는 양수만 가능합니다.'); // 양수가 아닌 경우 처리
      }
      sum += number;
    });

    // 결과값 출력
    Console.print(`결과 : ${sum}`); // 출력할 결과
  }
}

export default App;
