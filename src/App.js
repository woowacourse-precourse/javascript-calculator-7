import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getInput();
    try {
      const result = this.calculate(input);
      console.log(`결과 : ${result}`);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getInput() {
    // MissionUtils.Console.readLineAsync를 사용하여 입력 받기
    return await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  calculate(input) {
    if (!input) return 0;
    let delimiter = /,|:/; // 기본 구분자

    if (input.startsWith("//")) {
      const customDelimiter = input.substr(2, 1);
      delimiter = new RegExp(customDelimiter);
      input = input.substr(5);
    }

    const numbers = input.split(delimiter).map(Number);
    // 예외 처리 (음수 값 등)
    const nan = numbers.filter(n => isNaN(n));
    if (nan.length > 0) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error("[ERROR] 음수는 사용할 수 없습니다.");
    }
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
