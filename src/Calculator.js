import DelimiterExtractor from "./DelimiterExtractor.js";
import NumberConverter from "./NumberConverter.js";
import StringSplitter from "./StringSplitter.js";
import { printOutput, readInput } from "./utils.js";

class Calculator {
  constructor() {
    this.delimiterExtractor = new DelimiterExtractor();
    this.splitter = new StringSplitter();
    this.converter = new NumberConverter();
  }

  async run() {
    const inputValue = await this.promptUserInput();

    const processedInput =
      this.delimiterExtractor.extractCustomDelimiter(inputValue);
    const delimiters = this.delimiterExtractor.getDelimiters();

    const splitValues = this.splitter.split(processedInput, delimiters);
    const numbers = this.converter.convertAndValidate(splitValues);

    const result = this.sumNumbers(numbers);

    this.displayResult(result);
  }

  async promptUserInput() {
    const inputValue = await readInput("덧셈할 문자열을 입력해 주세요.\n");
    return inputValue;
  }

  displayResult(result) {
    printOutput(`결과: ${result}`);
  }

  sumNumbers(numbers) {
    const sumResult = numbers.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    return sumResult;
  }
}

export default Calculator;
