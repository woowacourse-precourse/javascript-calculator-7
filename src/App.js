import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (input == "") {
      Console.print(0);
      return;
    }

    let numbers;
    let customDelimiter;

    // 커스텀 구분자가 있는지 확인
    const customDelimiterMatch = input.match(/^\/\/(.)\\n/);
    if (customDelimiterMatch) {
      customDelimiter = customDelimiterMatch[1];
      input = input.split("\\n")[1];
    }

    // 문자열을 기본 구분자(쉼표, 콜론) 또는 커스텀 구분자를 기준으로 분리
    if (customDelimiter) {
      numbers = input.split(new RegExp(`[${customDelimiter},:]`));
    } else {
      numbers = input.split(/[,|:]/);
    }

    // 분리한 문자를 숫자로 변환
    const numberArray = numbers.map(Number);
  }
}

export default App;
