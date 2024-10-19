class ProcessorValidator {
  static validateInputFormat(input) {
    if (typeof input !== 'string') {
      throw new Error('[ERROR] 잘못된 입력 형식입니다.');
    }
  }

  static validateDelimiter(char, allDelimiters) {
    if (!allDelimiters.has(char)) {
      throw new Error(
        `[ERROR] 허용되지 않은 구분자: ${char} 가 입력되었습니다. 입력 문자열을 확인해주세요.`
      );
    }
  }

  static validateFirstChar(firstChar) {
    if (!/[0-9]/.test(firstChar)) {
      throw new Error(`[ERROR] 첫 구분자 앞에 숫자가 없습니다.`);
    }
  }

  static validateLastChar(
    lastNumber,
    lastDelimiter,
    numbersArray,
    allDelimiters
  ) {
    if (lastDelimiter) {
      this.validateDelimiter(lastDelimiter, allDelimiters);
      throw new Error(`[ERROR] 마지막 구분자 이후 숫자가 없습니다.`);
    }

    if (lastNumber) {
      numbersArray.push(lastNumber);
    }
  }

  static validateExistNumberArray(numberArray) {
    if (numberArray.length === 0) {
      throw new Error(`[ERROR] 숫자가 입력되지 않았습니다.`);
    }
  }
}

export default ProcessorValidator;
