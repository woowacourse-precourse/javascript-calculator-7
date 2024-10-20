import { Console } from "@woowacourse/mission-utils";

class App {
  /**
   * 애플리케이션의 메인 실행 메서드
   */
  async run() {
    const input = await this.getInput("덧셈할 문자열을 입력해 주세요.\n");

    if (this.isEmptyInput(input)) {
      this.printResult(0);
      return;
    }

    const { delimiters, numbersStr } = this.extractDelimiters(input);
    const numbers = this.parseNumbers(numbersStr, delimiters);
    const sum = this.calculateSum(numbers);

    this.printResult(sum);
  }

  /**
   * 사용자에게 입력을 요청합니다.
   * @param {string} prompt - 사용자에게 표시할 메시지
   * @returns {Promise<string>} - 사용자의 입력값
   */
  getInput(prompt) {
    return Console.readLineAsync(prompt);
  }

  /**
   * 입력 문자열이 비어있거나 공백만 포함하는지 확인합니다.
   * @param {string} input - 확인할 입력 문자열
   * @returns {boolean} - 비어있으면 true, 그렇지 않으면 false
   */
  isEmptyInput(input) {
    return input.trim() === "";
  }

  /**
   * 입력 문자열에서 구분자를 추출합니다. 커스텀 구분자를 지원합니다.
   * @param {string} input - 입력 문자열
   * @returns {Object} - 구분자 배열과 숫자 문자열을 포함하는 객체
   */
  extractDelimiters(input) {
    const defaultDelimiters = [",", ":"];
    const customDelimiterPattern = /^\/\/(.)\\n(.*)$/;
    const match = input.match(customDelimiterPattern);

    if (match) {
      const customDelimiter = match[1];
      const delimiters = [customDelimiter, ...defaultDelimiters];
      const numbersStr = match[2];
      return { delimiters, numbersStr };
    }

    return { delimiters: defaultDelimiters, numbersStr: input };
  }

  /**
   * 제공된 구분자를 기반으로 입력 문자열에서 숫자를 파싱합니다.
   * @param {string} numbersStr - 숫자를 포함하는 문자열
   * @param {string[]} delimiters - 구분자 문자 배열
   * @returns {number[]} - 유효한 숫자 배열
   * @throws 유효하지 않거나 음수인 숫자가 입력된 경우 오류를 던집니다.
   */
  parseNumbers(numbersStr, delimiters) {
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const numberStrings = numbersStr.split(delimiterRegex);
    const numbers = [];

    for (const numStr of numberStrings) {
      const trimmedStr = numStr.trim();
      if (trimmedStr === "") continue;
      const num = Number(trimmedStr);

      if (isNaN(num) || num < 0) {
        throw new Error(`[ERROR] 유효하지 않은 숫자 입력 : ${trimmedStr}`);
      }

      numbers.push(num);
    }

    return numbers;
  }

  /**
   * 숫자 배열의 합계를 계산합니다.
   * @param {number[]} numbers - 합계를 구할 숫자 배열
   * @returns {number} - 숫자들의 합계
   */
  calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * 결과를 콘솔에 출력합니다.
   * @param {number} sum - 출력할 합계
   */
  printResult(sum) {
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
