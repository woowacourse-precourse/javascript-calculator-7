import { Console } from "@woowacourse/mission-utils";

class CalculateError extends Error {
  constructor(message) {
    super();
    this.message = "[ERROR] " + message;
  }
}

class CustomSeparatorError extends CalculateError {
  constructor(message) {
    super(message);
  }
}

class ValidateError extends CalculateError {
  constructor(message) {
    super(message);
  }
}

class ParseError extends CalculateError {
  constructor(message) {
    super(message);
  }
}

class App {
  constructor() {
    this.sum = 0;
    this.separatorArray = [",", ":"];
    this.separator = "";
  }
  async run() {
    let userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const customSeparator = userInput.search(customSeparatorReg);
    if (customSeparator >= 0) {
      this.checkCustomSeparatorError(userInput);
      this.separatorArray.push(userInput[2]);
      userInput = userInput.slice(5);
    }
    this.separator = this.separatorArray.join("");
    if (userInput.length > 0) {
      this.checkValidateError(userInput);
      const separatorReg = new RegExp(`[${this.separator}]`, "g");
      const numbers = userInput.replace(separatorReg, " ").split(" ");
      const parsedNumbers = numbers.map((number) => {
        const num = parseInt(number, 10);
        this.checkParseError(num);
        return num;
      });
      this.sum = parsedNumbers.reduce((acc, cur) => acc + cur, 0);
    }
  }
  checkCustomSeparatorError(userInput) {
    if (userInput.slice(0, 2) !== "//")
      throw new CustomSeparatorError(
        "커스텀 구분자는 맨 앞에 존재해야 합니다."
      );
    const degreeReg = /[^\d]/;
    if (!degreeReg.test(userInput[2]))
      throw new CustomSeparatorError("숫자는 커스텀 구분자가 될 수 없습니다.");
    if (userInput[4] != "n")
      throw new CustomSeparatorError(
        "커스텀 구분자는 한 글자만 사용 가능합니다."
      );
  }
  checkValidateError(userInput) {
    const validateSeparator = new RegExp(`^[0-9${this.separator}]+$`, "g");
    if (!validateSeparator.test(userInput))
      throw new ValidateError("잘못된 입력입니다.");
  }
  checkParseError(num) {
    if (!num) throw new ParseError("잘못된 입력입니다");
    if (num < 0) throw new ParseError("양수를 입력해주세요");
  }
}

export default App;
