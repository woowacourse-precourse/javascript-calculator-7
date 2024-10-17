import { Console } from "@woowacourse/mission-utils";

class App {
  // 1. 프로그램의 메인 실행 함수
  async run() {
    try {
      // 1-1. 사용자로부터 문자열 입력을 받음
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      // 1. 빈 문자열 또는 null을 입력할 경우 0을 반환한다.
      if (typeof input !== "string" || input.trim() === "") {
        throw new Error("[ERROR] 입력값이 유효하지 않습니다.");
      }

      // 입력값에서 \\n을 실제 개행문자 \n으로 변환
      const sanitizedInput = input.replace("\\n", "\n").trim();

      // 2. 쉼표(,) 구분자를 사용하여 숫자를 분리하고 합산한다.
      // 3. 콜론(:) 구분자를 추가하여 숫자를 분리하고 합산한다.
      // 4. 커스텀 구분자를 지정할 수 있다. 구분자는 //와 \n 사이에 위치한다.
      const result = this.calculate(sanitizedInput);

      // 결과 출력
      Console.print(`결과 : ${result}`);
    } catch (error) {
      // 에러 발생 시 메시지 출력
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  // 구분자를 정규식에서 안전하게 변환하는 함수
  escapeRegExp(string) {
    // 정규식에서 특별한 의미를 가지는 문자들을 이스케이프 처리
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // 문자열을 계산하는 함수
  calculate(input) {
    // 1. 빈 문자열 또는 null을 입력할 경우 0을 반환한다.
    if (input == null || input.trim() === "") {
      return 0;
    }

    // 기본 구분자 설정 (쉼표, 콜론)
    let delimiters = [",", ":"];

    // 입력 문자열에서 숫자만 추출
    let numbersString = input;

    // 4. 커스텀 구분자를 지정할 수 있다. 구분자는 //와 \n 사이에 위치한다.
    if (input.startsWith("//")) {
      // 커스텀 구분자 처리
      const delimiterEndIndex = input.indexOf("\n");
      if (delimiterEndIndex === -1) {
        throw new Error("[ERROR] 커스텀 구분자가 정의되지 않았습니다.");
      }

      const customDelimiter = input.substring(2, delimiterEndIndex);
      delimiters.push(customDelimiter);
      numbersString = input.substring(delimiterEndIndex + 1).trim(); // 숫자만 추출
    }

    // 구분자들을 정규식에서 사용할 수 있도록 이스케이프 처리
    const escapedDelimiters = delimiters.map((delim) =>
      this.escapeRegExp(delim)
    );

    // 구분자 배열을 하나의 정규식으로 합침
    const delimiterRegex = new RegExp(`[${escapedDelimiters.join("")}]`);

    // 2. 쉼표(,) 구분자를 사용하여 숫자를 분리하고 합산한다.
    // 3. 콜론(:) 구분자를 추가하여 숫자를 분리하고 합산한다.
    const numberStrings = numbersString
      .split(delimiterRegex)
      .filter((numStr) => numStr.trim() !== "");

    // 5. 구분자와 숫자 이외의 값 또는 음수를 입력할 경우 [ERROR]로 시작하는 메시지를 출력하고 프로그램을 종료한다.
    const numbers = numberStrings.map((numStr) => {
      const num = Number(numStr);
      if (isNaN(num) || num < 0) {
        throw new Error("[ERROR] 숫자 형식이 잘못되었습니다.");
      }
      return num;
    });

    // 숫자들의 합을 구하고 반환
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
}

export default App;
