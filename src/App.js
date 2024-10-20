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
      Console.print(`오류: ${error.message}`);
    }
  }

  processInput(input) {
    // 기본 구분자 쉼표를 사용
    const delimiter = ',';
    const numbers = input.split(delimiter).map(num => num.trim());

    // 양수 확인
    numbers.forEach(num => {
      const number = parseInt(num, 10);
      if (isNaN(number) || number < 0) {
        throw new Error(`양수만 입력 가능합니다: ${num}`);
      }
    });

  }
}

export default App;
