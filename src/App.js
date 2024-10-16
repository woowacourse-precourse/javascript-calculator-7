import { MissionUtils } from "@woowacourse/mission-utils";

class StringCalculator {
  static CUSTOM_SEPARATOR_REGEX = /^\/\/(.)\\n(.*)/;
  static DEFAULT_SEPARATORS = [',', ':'];

  // 입력 문자열을 파싱하여 구분자와 숫자 문자열 분리
  static parseInput(input) {
    const customSeparatorMatch = input.match(this.CUSTOM_SEPARATOR_REGEX);
    if (customSeparatorMatch) {
      return {
        separator: [customSeparatorMatch[1]],
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

  // 파싱된 숫자 배열의 합계 계산
  static sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  // 메인 계산 메서드: 입력 문자열을 받아 최종 결과 반환
  static calculate(input) {
    if (input === '') return 0;

    const { separator, numbers } = StringCalculator.parseInput(input);
    const parsedNumbers = StringCalculator.parseNumbers(numbers, separator);
    return StringCalculator.sum(parsedNumbers);
  }
}

class App {
  async run() {
    try{
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = StringCalculator.calculate(input);
      MissionUtils.Console.print(`결과: ${result}`);
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }
}

export default App;
