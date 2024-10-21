import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 사용자 입력 받기
    const input = await this.getInput();
    // 구분자 설정하기
    const delimiter = this.getDelimiter(input);
    // 숫자 배열로 파싱
    const parsedList = this.parseInput(input, delimiter);
    // 결과 계산 및 출력
    this.calculateAndPrint(parsedList);
  }

  // 사용자 입력 받는 함수
  async getInput() {
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  // 구분자 설정하는 함수
  getDelimiter(input) {
    const customDelimiterPattern = /\/\/(.)\\n/;
    const defaultDelimiter = /[,:]/;

    const customPatternMatch = input.match(customDelimiterPattern);
    if (customPatternMatch) {
      const newDelimiter = customPatternMatch[1];
      const escapedDelimiter = this.setEscapeSpecialCharacter(newDelimiter);
      return new RegExp((`[${escapedDelimiter}]`));
    }

    return defaultDelimiter;
  }

  // 특수 문자를 이스케이프 처리하는 함수
  setEscapeSpecialCharacter(char) {
    return char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 전체 입력 문자열에서 숫자와 구분자로 이루어진 문자열을 분리하고, 이를 구분자로 나누어 숫자 배열로 만드는 함수
  parseInput(input, delimiter) {
    const customDelimiterPattern = /^\/\/(.)\\n/;
    const parseTarget = customDelimiterPattern.test(input)
      ? input.slice(input.match(customDelimiterPattern)[0].length)
      : input;

    return parseTarget.trim().split(delimiter).map(Number);
  }

  // 덧셈 계산 후 결과를 출력하는 함수
  calculateAndPrint(parsedList) {
    const result = parsedList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    this.checkForErrors(parsedList, result);

    Console.print(`결과 : ${result}`);
  }

  // 에러 체크 함수
  checkForErrors(parsedList, result) {
    if (isNaN(result)) {
      throw new Error("[ERROR] 잘못된 형식으로 입력했습니다. ")
    }
    else if (parsedList.some((prev) => prev < 0) ) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다. ")
    }
  }
}

export default App;
