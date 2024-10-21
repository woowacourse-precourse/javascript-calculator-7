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
    this.validateNumbers(numbers);  // 음수 값 유효성 검사 추가
    return numbers.reduce((sum, num) => sum + num, 0);  // 숫자의 합 반환
  }

  extractNumbers(numbersString) {
    const delimiter = /[,:]/;  // 쉼표와 콜론 구분자

    const numbers = numbersString.split(delimiter).map((num) => {
      const parsed = Number(num);
      if (isNaN(parsed)) {  // 숫자로 변환되지 않는 경우 예외 처리
        throw new Error("[ERROR]");
      }
      return parsed;
    });

    return numbers;
  }

  validateNumbers(numbers) {
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error("[ERROR]" + negatives.join(', '));
    }
  }
}

export default App;
