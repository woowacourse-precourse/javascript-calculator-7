import { printOutput, readInput } from './utils.js';

class Calculator {
  constructor(delimiterExtractor, splitter, converter, operation) {
    this.delimiterExtractor = delimiterExtractor;
    this.splitter = splitter;
    this.converter = converter;
    this.operation = operation;
  }

  async run() {
    const inputValue = await this.promptUserInput();

    const processedInput = this.delimiterExtractor.extractDelimiter(inputValue);
    const delimiters = this.delimiterExtractor.getDelimiters();

    const splitValues = this.splitter.split(processedInput, delimiters);
    const numbers = this.converter.convertAndValidate(splitValues);

    const result = this.operation.calculate(numbers);

    this.displayResult(result);
  }

  async promptUserInput() {
    const inputValue = await readInput('덧셈할 문자열을 입력해 주세요.\n');
    return inputValue;
  }

  displayResult(result) {
    printOutput(`결과 : ${result}`);
  }
}

export default Calculator;
