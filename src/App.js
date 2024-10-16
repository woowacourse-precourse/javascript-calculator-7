import { MissionUtils } from "@woowacourse/mission-utils";

class StringCalculator {
  static CUSTOM_SEPARATOR_REGEX = /^\/\/(.)\n(.*)/;
  static DEFAULT_SEPARATORS = [',', ':'];

  // 입력 문자열을 파싱하여 구분자와 숫자 문자열 분리
  static parseInput(input) {
    const customSeparatorMatch = input.match(this.CUSTOM_SEPARATOR_REGEX);
    if (customSeparatorMatch) {
      return {
        separator: customSeparatorMatch[1],
        numbers: customSeparatorMatch[2],
      };
    }
    return { separator: this.DEFAULT_SEPARATORS, numbers: input };
  }
}

class App {
  async run() {
    try{
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    } catch (e) {
      console.error(e.message);
    }
  }
}

export default App;
