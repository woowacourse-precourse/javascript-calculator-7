import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.separators = [",", ":"]; // 구분자 배열
    this.numbers = []; // 숫자 배열
  }
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      const afterCustomSeparator = await this.handleCustomSeparator(input); // 커스텀 구분자 제외한 문자열
      Console.print(afterCustomSeparator);

      const result = input;
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`${error}`);
    }
  }

  // 커스텀 구분자 처리하는 함수
  async handleCustomSeparator(input) {
    const match = this.extractCustomSeparator(input); // 커스텀 구분자 추출

    if (match) { // 커스텀 구분자가 있으면
      const customSeparator = match[1];
      this.validateCustomSeparator(customSeparator); // 구분자 유효성 검사
      this.separators.push(customSeparator); // 구분자 배열에 커스텀 구분자 추가
      return input.slice(match[0].length); // 구분자 뒤에 있는 실제 문자열 반환
    }

    Console.print("커스텀 구분자가 없다");
    return input; // 커스텀 구분자가 없으면 입력 문자열 그대로 반환
  }

  // 커스텀 구분자를 추출하는 메서드
  extractCustomSeparator(input) {
    const customSeparatorPattern = /\/\/(.+?)\\n/; // "//"로 시작하고 "\n"으로 끝나는 문자열 파악하는 정규식
    const match = input.match(customSeparatorPattern); // 매칭된 문자열 추출
    Console.print(match);

    if (match && input.startsWith(match[0])) { // 매칭되는 문자열이 있고 그 문자열이 입력 문자열 맨 앞에서 시작한다면
      Console.print("커스텀 구분자가 있다");
      return match;
    }

    if (match) { // 매칭되는 문자열이 있지만 맨 앞에서 시작하지 않는다면
      throw new Error(
        "[ERROR] 커스텀 구분자는 입력 문자열 맨 앞에 위치해야 합니다."
      );
    }

    return null; // 매칭되지 않으면 null 반환
  }

  // 커스텀 구분자의 유효성을 검사하는 메서드
  validateCustomSeparator(separator) {
    if (separator.length !== 1) { // 커스텀 구분자의 길이 측정
      throw new Error("[ERROR] 문자열은 커스텀 구분자로 사용할 수 없습니다.");
    }

    if (!isNaN(Number(separator))) {
      throw new Error("[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.");
    }
  }
}

export default App;
