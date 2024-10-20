import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getInput();
    try {
      const result = this.calculate(input);
      MissionUtils.Console.print(`"결과 : ${result}"`);
    } catch (error) {
      MissionUtils.Console.print(`"${error.message}"`);
    }
  }

  async getInput() {
    // MissionUtils.Console.readLineAsync를 사용하여 입력 받기
    return await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  calculate(input) {
    if (!input) return 0;
    input = input.replace(/^"|"$/g, ''); // 양 옆의 " 제거
    let delimiter = /,|:/; // 기본 구분자
    // console.log(input);
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf('\\n');
      // console.log(delimiterEndIndex)
      const customDelimiter = input.substring(2, delimiterEndIndex);
      // console.log(customDelimiter)
      delimiter = new RegExp(customDelimiter);
      // console.log(delimiter)
      input = input.slice(delimiterEndIndex + 2);
      // console.log(input)
    }

    const numbers = input.split(delimiter).map(Number);
    // 예외 처리 (음수 값 등)
    const nan = numbers.filter(n => isNaN(n));
    if (nan.length > 0) {
      throw new Error("[ERROR]");
    }
    const negatives = numbers.filter(n => n < 0);
    console.log(negatives);
    if (negatives.length > 0) {
      throw new Error("[ERROR]");
    }
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
