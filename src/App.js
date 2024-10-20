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
      Console.print(`[ERROR] ${error}`);
    }
  }

  // 커스텀 구분자 처리하는 함수
  async handleCustomSeparator(input) {
    // 정규식으로 "//"로 시작하고 "\n"으로 끝나는 문자열이 있는지 확인
    const customSeparatorPattern = /\/\/(.+?)\\n/; // "//"로 시작하고 "\n"으로 끝나는 문자열 파악하는 정규식
    const match = input.match(customSeparatorPattern); // [매칭된 문자열, 구분자 제외한 문자열, 매칭된 문자열 시작 위치, input, group], 매칭된 문자열이 없을 경우 null
    Console.print(match);

    if (match) {
      Console.print("커스텀 구분자가 있다");
      if (input.startsWith(match[0])) {
        // 커스텀 구분자가 입력 문자열 맨 앞에 있는지 검사
        Console.print("커스텀 구분자가 맨 앞에 있다");
        const customSeparator = match[1];
        Console.print(match[1]);

        if (customSeparator.length !== 1) {
          // 커스텀 구분자가 문자열인 경우
          throw new Error(
            "[ERROR] 문자열은 커스텀 구분자로 사용할 수 없습니다."
          );
        } else if (!isNaN(Number(customSeparator))) {
          // 커스텀 구분자가 숫자인 경우
          throw new Error("[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.");
        } else {
          this.separators.push(customSeparator); // 구분자 배열에 커스텀 구분자 추가
          return input.slice(match[0].length); // 구분자 뒤에 있는 실제 문자열을 반환 (커스텀 구분자 부분을 제거하고 반환)
        }
      } else {
        // 구분자가 맨 앞에 없을 때 에러 처리
        throw new Error(
          "[ERROR] 커스텀 구분자는 입력 문자열 맨 앞에 위치해야 합니다."
        );
      }
    } else {
      Console.print("커스텀 구분자가 없다");
    }
    
    // 커스텀 구분자가 없다면 입력 문자열 그대로 반환
    return input;
  }
}

export default App;
