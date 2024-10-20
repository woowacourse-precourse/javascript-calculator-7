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

  extractDelimiters(input) {
    const delimiterPattern = /^\/\/(.*?)\\n/; // //로 시작하고 \n로 끝나는 부분을 찾음
    const match = input.match(delimiterPattern);
    let delimiters = [",", ":"]; // 기본 구분자

    if (match) {
      const customDelimiter = match[1]; // 커스텀 구분자 추출 후 공백 제거
      delimiters = [customDelimiter, ...delimiters]; // 커스텀 구분자 추가
      input = input.slice(match[0].length); // 커스텀 구분자 부분 잘라내고 공백 제거
    }

    return { delimiters, trimmedInput: input }; // 이스케이프 문자를 포함하지 않도록 반환
  }
}

export default StringCalculator;
