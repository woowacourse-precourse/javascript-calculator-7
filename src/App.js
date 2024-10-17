import { Console } from "@woowacourse/mission-utils";

class App {
  static CUSTOM_DELIMITER_REGEX = /\/\/(.*?)\\n/;

  async run() {
    const userInput = await this.getUserInput();
    // 빈문자열일 경우 케이스 분리
    if (userInput === "") {
      Console.print(`결과 : 0`);
    } else if (this.isValidInput(userInput)) {
      const result = this.calculateSum(userInput);
      Console.print(`결과 : ${result}`);
    } else {
      Console.print("[ERROR] 입력된 문자열이 잘못된 형식입니다.");
      throw new Error("[ERROR]");
    }
  }

  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  // 유효성 검사 함수를 하나로 합침
  isValidInput(input) {
    return (
      this.isValidDefaultDelimiter(input) || this.isValidCustomDelimiter(input)
    );
  }

  // 기본 구분자로 나눈 배열의 각 원소가 유효한지
  isValidDefaultDelimiter(input) {
    const delimitedArray = input.split(/[:,]/);
    return this.validateNumbers(delimitedArray);
  }

  // 커스텀 구분자가 존재하는지
  // 커스텀 구분자가 기본구분자라면 false 반환
  // 존재한다면 커스텀 구분자로 나눈 배열의 각 원소가 유효한지
  isValidCustomDelimiter(input) {
    const match = input.match(App.CUSTOM_DELIMITER_REGEX);
    // match가 존재하지 않는다면 match의 1번째 index를 확인하는 과정에서 TypeError 발생
    // 따라서 match가 존재하는지도 조건을 넣어줘야 함
    if (match && (match[1] === "," || match[1] === ":")) {
      return false;
    } else if (match) {
      // '//custom_delimiter\n'을 제외한 문자열
      const replacedString = input.replace(App.CUSTOM_DELIMITER_REGEX, "");
      return this.validateNumbers(replacedString.split(match[1]));
    }
    return false;
  }

  // 구분자로 나눈 배열의 원소가 양수인지 확인하는 함수
  validateNumbers(delimitedArray) {
    return delimitedArray.every((number) => this.isPositiveNumber(number));
  }

  isPositiveNumber(value) {
    const num = Number(value);
    return !isNaN(num) && num > 0;
  }

  calculateSum(input) {
    const match = input.match(App.CUSTOM_DELIMITER_REGEX);

    // 커스텀 구분자인 경우
    if (match) {
      const replacedString = input.replace(App.CUSTOM_DELIMITER_REGEX, "");
      return this.calculateCustomSum(replacedString, match[1]);
    }

    // 기본 구분자인 경우
    return this.calculateDefaultSum(input);
  }

  calculateDefaultSum(input) {
    return this.sum(input.split(/[:,]/));
  }

  calculateCustomSum(replacedString, delimiter) {
    return this.sum(replacedString.split(delimiter));
  }

  sum(delimitedArray) {
    return delimitedArray.reduce((total, number) => total + Number(number), 0);
  }
}

export default App;
