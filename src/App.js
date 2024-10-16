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

  // 숫자 문자열을 구분자로 분리하고 각 숫자를 파싱
  static parseNumbers(numbers, separator) {
    const splitNumbers = numbers.split(new RegExp(`[${separator.join('')}]`));
    return splitNumbers.map(this.validateAndParseNumber);
  }

  // 각 숫자 문자열의 유효성을 검사하고 숫자로 변환
  static validateAndParseNumber(numStr) {
    const num = Number(numStr);
    
    if (isNaN(num) || num < 0) {
      throw new Error(`[ERROR] Invalid number: ${numStr}`);
    }
    return num;
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
