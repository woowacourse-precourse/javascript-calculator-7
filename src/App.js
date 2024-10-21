import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 사용자 입력
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await MissionUtils.Console.readLineAsync();

    // 사용자 출력과 에러 출력
    try {
      const result = this.calculateSum(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
  // 빈 문자열 입력시 0 반환
  calculateSum(input) {
    if (input === "") return 0;

    // 기본 구분자 설정
    let delimiters = [',', ':'];

    // 커스텀 구분자 처리
    let delimiterEndIndex = input.indexOf("\\n");
    if (input.startsWith("//") && delimiterEndIndex !== -1) {
      const customDelimiter = input.substring(2, delimiterEndIndex);
      delimiters.push(...customDelimiter.split(''));
      input = input.substring(delimiterEndIndex + 2);
    }

    const regExp = new RegExp(delimiters.map(s => s.replace(/([.*+?^${}()|\[\]\\])/g, '\\$1')).join('|'), 'g');
    const numbers = input.split(regExp).map(num => Number(num.trim()));

    this.validateNumbers(numbers);
  }
}

export default App;