import {
  processCustomDelimiter,
  processDefaultDelimiter,
} from "./delimiterProcessor.js";

class StringProcessor {
  constructor(inputValue) {
    this.inputValue = inputValue;
    this.result = [];
  }

  processInput() {
    if (this.inputValue === "0-empty") {
      return [0];
    }

    if (this.inputValue.startsWith("//")) {
      return processCustomDelimiter(
        this.inputValue,
        this.processNumbers.bind(this)
      );
    }

    return processDefaultDelimiter(
      this.inputValue,
      this.processNumbers.bind(this)
    );
  }

  processNumbers(numbers) {
    numbers.forEach((num) => {
      const validatedNum = this.validateNumber(num);
      this.result.push(validatedNum);
    });
    return this.result;
  }

  validateNumber(inputString) {
    const number = Number(inputString);

    if (isNaN(number) || number <= 0) {
      throw new Error("유효하지 않은 숫자가 포함되었습니다.");
    }

    return number;
  }
}

const stringParser = (inputValue) => {
  const processor = new StringProcessor(inputValue);
  return processor.processInput();
};

export default stringParser;
