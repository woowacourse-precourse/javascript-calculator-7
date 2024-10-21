import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요: "
      );

      // 입력값이 없는 경우 결과 0 출력
      if (!input) {
        Console.print("결과 : 0");
        return;
      }

      // 입력값 검증
      this.validateInput(input);

      // 커스텀 구분자 및 숫자 문자열 추출
      const { customPattern, numbersString } = this.extractCustomDivider(input);

      // 구분자 패턴 설정 및 숫자 파싱
      const seperatorPattern = new RegExp(
        `[${customPattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|,|:]`
      );
      const numbers = this.parseNumbers(numbersString, seperatorPattern);

      // 합계 계산 및 출력
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  /* 커스텀 구분자 및 숫자 문자열 추출하는 함수 */
  extractCustomDivider(input) {
    let customPattern = "";
    let numbersString = input;

    // 커스텀 구분자 확인
    const customCheck = input.startsWith("//") && input.includes("\\n");
    if (customCheck) {
      const match = input.match(/^\/\/(.*?)\\n/);
      if (match) {
        customPattern = match[1];
        numbersString = input.split("\\n")[1];
      }
    }

    return { customPattern, numbersString };
  }

  /* 숫자 문자열을 구분자 패턴을 이용하여 파싱하는 함수 */
  parseNumbers(input, pattern) {
    return input.split(pattern).map((value) => {
      // 구분자가 아닌 문자열이나 음수가 입력된 경우 에러 처리
      if (isNaN(value)) {
        throw new Error("[ERROR] 바르지 않은 문자열이 포함됨");
      } else if (Number(value) < 0) {
        throw new Error("[ERROR] 음수가 포함됨");
      }
      return Number(value);
    });
  }

  /* 입력값이 숫자가 아닌 경우 에러 처리하는 함수 */
  validateInput(input) {
    // 문자열만 입력된 경우
    if (/^[^0-9]*$/.test(input)) {
      throw new Error("[ERROR] 숫자가 입력되지 않음");
    }

    // 구분자가 없는 경우 (숫자만 입력된 경우)
    if (/^\d+$/.test(input)) {
      throw new Error("[ERROR] 구분자가 포함되지 않음");
    }
  }
}

export default App;
