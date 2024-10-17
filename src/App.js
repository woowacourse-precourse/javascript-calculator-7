import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요. \n"
      );
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  calculateSum(input) {
    let defaultDelimiter = /[,:]/; // 기본 구분자 , :
    let numberString = input;

    // 빈 문자열일 경우 0을 반환
    if (input === "") {
      return 0;
    }

    // 숫자 하나만 있는 경우 에러 처리
    if (/^\d+$/.test(input)) {
      throw new Error('[ERROR]');
    }

    // '\n' 문자를 실제 개행 문자로 교체
    input = input.replace(/\\n/g, "\n");

    // 기본 구분자 연속 사용 여부 검사
    const invalidDelimiter = /[,|:]{2,}/;
    if (invalidDelimiter.test(input)) {
      throw new Error('[ERROR]');
    }

    // 커스텀 구분자인지 확인
    if (input.startsWith("//")) {
      const delimiterEnd = input.indexOf("\n");

      // \n 가 없는 경우 에러
      if (delimiterEnd === -1) {
        throw new Error('[ERROR]');
      }

      const customDelimiter = input.slice(2, delimiterEnd);
      defaultDelimiter = new RegExp(`[${customDelimiter}]`);

      numberString = input.slice(delimiterEnd + 1);
    }

    const numbers = numberString.split(defaultDelimiter);

    const sum = numbers.reduce((sum, numStr) => {
      const num = Number(numStr);

      // 숫자가 아니거나 비양수인 경우 에러 발생
      if (isNaN(numStr) || num <= 0) {
        throw new Error('[ERROR]'); 
      }

      return sum + num;
    }, 0);

    return sum;
  }
}

export default App;
