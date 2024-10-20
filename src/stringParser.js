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
    // '0-empty'인 경우는 빈 입력에서 0으로 처리되었음을 의미
    if (this.inputValue === "0-empty") {
      return [0]; // 빈 입력은 0으로 처리
    }

    // 커스텀 구분자 처리
    if (this.inputValue.startsWith("//")) {
      return processCustomDelimiter(
        this.inputValue,
        this.processNumbers.bind(this)
      );
    }

    // 기본 구분자 처리
    return processDefaultDelimiter(
      this.inputValue,
      this.processNumbers.bind(this)
    );
  }

  processNumbers(numbers) {
    for (let num of numbers) {
      const validatedNum = this.validateNumber(num);
      this.result.push(validatedNum);
    }
    return this.result;
  }

  validateNumber(inputString) {
    const number = Number(inputString);
    if (!/^\d+$/.test(inputString) || number <= 0) {
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
