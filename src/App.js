import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  handleError(messages) {
    const formattedMessage = `[ERROR] ${messages}`;
    throw Error(formattedMessage);
  }

  validateNumbers(strings) {
    for (const string of strings) {
      if (isNaN(Number(string)))
        this.handleError("문자열의 숫자와 구분자가 유효한지 확인해주세요.");
    }
  }

  validateCustomDelimiters(index, customDelimiter) {
    if (index === -1) {
      this.handleError("커스텀 구분자 형식이 잘못되었습니다.");
    }

    if (customDelimiter.length > 1) {
      this.handleError(
        "다중 구분자는 지원되지 않습니다. 하나의 구분자만 입력해 주세요."
      );
    }
  }

  parseStringToNumbers(string) {
    if (!string.trim()) return [];

    const defaultDelimiters = [",", ":"];
    let result = string;

    if (string.startsWith("//")) {
      result = this.parseCustomDelimiters(string, defaultDelimiters);
    }

    const regex = new RegExp(`[${defaultDelimiters.join("")}]`);
    const strings = result.split(regex);

    this.validateNumbers(strings);

    return this.parseToNumber(strings);
  }

  parseCustomDelimiters(string, defaultDelimiters) {
    const findIndex = string.indexOf("\\n");
    const customDelimiter = string.slice(2, findIndex);

    this.validateCustomDelimiters(findIndex, customDelimiter);

    defaultDelimiters.push(customDelimiter);
    return string.slice(findIndex + 2);
  }

  parseToNumber(numbers) {
    return numbers.map(Number);
  }

  sum(numbers) {
    if (!numbers.length) return 0;

    let result = 0;
    for (const number of numbers) result += number;

    return result;
  }

  async readInput() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT);
    return userInput;
  }

  printResult(result) {
    return Console.print(`결과 : ${result}`);
  }

  async run() {
    const input = await this.readInput();
    const numbers = this.parseStringToNumbers(input);
    const result = this.sum(numbers);

    return this.printResult(result);
  }
}

export default App;
