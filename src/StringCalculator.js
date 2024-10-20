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

  sum(input) {
    if (!input.trim()) return 0; // 빈 입력 처리

    // 커스텀 구분자 추출
    const { delimiters, trimmedInput } = this.extractDelimiters(input);
    console.log("delimiters:", delimiters);
    console.log("trimmedInput:", trimmedInput);

    const numbers = this.splitNumbers(trimmedInput, delimiters);
    console.log("numbers:", numbers);

    this.validateNumbers(numbers);

    return numbers.reduce((acc, curr) => acc + Number(curr), 0);
  }
}

export default StringCalculator;
