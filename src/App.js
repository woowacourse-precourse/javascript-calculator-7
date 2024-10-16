import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요. \n"
      );
      const result = this.calculateSum(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculateSum(input) {
    let defaultDelimiter = /[,:]/; // 기본 구분자 , :
    let numberString = input;
    
    // '\n' 문자를 실제 개행 문자로 교체
    input = input.replace(/\\n/g, '\n');

    // 커스텀 구분자인지 확인
    if (input.startsWith('//')) {
      const delimiterEnd = input.indexOf('\n');
      const customDelimiter = input.slice(2, delimiterEnd);
      defaultDelimiter = new RegExp(`[${customDelimiter}]`);

      numberString = input.slice(delimiterEnd + 1)
    }

    const numbers = numberString.split(defaultDelimiter);

    return
  }
}

export default App;