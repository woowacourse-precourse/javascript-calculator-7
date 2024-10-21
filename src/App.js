import { Console } from "@woowacourse/mission-utils";
import {
  CustomSeparatorError,
  ValidateError,
  ParseError,
} from "./CustomErrors.js";
import { CUSTOM_SEPARATOR_REG, DEGREE_REG } from "./constants.js";

class App {
  constructor() {
    this.sum = 0;
    this.separator = ",:";
    this.userInput = "";
  }

  async run() {
    await this.processUserInputAndStoreResult();
    this.processCustomSeparator();
    if (this.userInput.length > 0) {
      const stringNumbers = this.getNumbers();
      const numbers = this.parseNumbers(stringNumbers);
      this.calculateSum(numbers);
    }
    this.printResult();
  }

  async processUserInputAndStoreResult() {
    this.userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  printResult() {
    Console.print(`결과 : ${this.sum}`);
  }

  processCustomSeparator() {
    const customSeparator = this.userInput.search(CUSTOM_SEPARATOR_REG);
    if (customSeparator >= 0) {
      this.checkCustomSeparatorError(this.userInput);
      this.separator += this.userInput[2];
      this.userInput = this.userInput.slice(5);
    }
  }

  getNumbers() {
    this.checkValidateError(this.userInput);
    const separatorReg = new RegExp(`[${this.separator}]`, "g");
    return this.userInput.split(separatorReg);
  }

  parseNumbers(stringNumbers) {
    const parsedNumbers = stringNumbers.map((number) => {
      const num = parseInt(number, 10);
      this.checkParseError(num);
      return num;
    });
    return parsedNumbers;
  }

  calculateSum(numbers) {
    this.sum = numbers.reduce((acc, cur) => acc + cur, 0);
  }

  checkCustomSeparatorError() {
    if (this.userInput.slice(0, 2) !== "//")
      throw new CustomSeparatorError(
        "커스텀 구분자는 맨 앞에 존재해야 합니다."
      );

    if (!DEGREE_REG.test(this.userInput[2]))
      throw new CustomSeparatorError("숫자는 커스텀 구분자가 될 수 없습니다.");
    if (this.userInput[4] != "n")
      throw new CustomSeparatorError(
        "커스텀 구분자는 한 글자만 사용 가능합니다."
      );
  }

  checkValidateError() {
    const validateSeparator = new RegExp(`^[0-9${this.separator}]+$`, "g");
    if (!validateSeparator.test(this.userInput))
      throw new ValidateError("구분자와 양수를 입력해주세요.");
  }

  checkParseError(num) {
    if (isNaN(num)) throw new ParseError("잘못된 입력입니다.");
    if (num < 0) throw new ParseError("양수를 입력해주세요");
  }
}

export default App;
