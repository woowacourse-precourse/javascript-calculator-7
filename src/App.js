import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await this.getUserInput();
    if (this.isValidDefaultDelimiter(userInput)) {
      const result = this.calculateDefaultSum(userInput);
      Console.print(`결과 : ${result}`);
    } else {
      Console.print("[ERROR] 입력된 문자열이 잘못된 형식입니다.");
      throw new Error("[ERROR]");
    }
  }

  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  // 기본 구분자로 나눈 배열의 각 원소가 유효한지
  isValidDefaultDelimiter(input) {
    const delimitedArray = input.split(/[:,]/);
    return this.validateNumbers(delimitedArray);
  }

  // 구분자로 나눈 배열의 원소가 양수인지 확인하는 함수
  validateNumbers(delimitedArray) {
    return delimitedArray.every((number) => this.isPositiveNumber(number));
  }

  isPositiveNumber(value) {
    const num = Number(value);
    return !isNaN(num) && num > 0;
  }

  calculateDefaultSum(input) {
    return this.sum(input.split(/[:,]/));
  }

  sum(delimitedArray) {
    return delimitedArray.reduce((total, number) => total + Number(number), 0);
  }
}

export default App;
