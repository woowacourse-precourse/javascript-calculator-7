import { Console } from "@woowacourse/mission-utils";

class StringCalculator {
  async calculate() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.:"
    );
    try {
      const result = this.sum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default StringCalculator;
