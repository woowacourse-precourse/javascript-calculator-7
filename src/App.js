import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return;
    }
  }

  calculate(input) {
    if (input === "") {
      return 0;  // 공백 문자열 처리
    }

    const numbers = this.extractNumbers(input);
    return numbers.reduce((sum, num) => sum + num, 0);  // 숫자의 합 반환
  }

  extractNumbers(numbersString) {
    const delimiter = /[,:]/;  // 쉼표와 콜론을 구분자로 사용
    return numbersString.split(delimiter).map(Number);  // 문자열을 숫자로 변환
  }
}

export default App;
