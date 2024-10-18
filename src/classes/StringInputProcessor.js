class StringInputProcessor {
  constructor() {
    this.customDelimiterRegEx = /\/\/(.*?)\r?\n/g;
    this.defaultDelimiters = new Set([',', ':']);
    this.customDelimiters = new Set();
  }

  processInput(input) {
    if (!input) {
      return [];
    }

    input = input.replace(/\\n/g, '\n');

    // 커스텀 구분자 추출
    this.customDelimiters.clear();
    let match;
    while ((match = this.customDelimiterRegEx.exec(input)) !== null) {
      this.customDelimiters.add(match[1]);
    }

    const combinedDelimiters = new Set([
      ...this.defaultDelimiters,
      ...this.customDelimiters,
    ]);

    const numbersStartIndex = input.lastIndexOf('\n') + 1;
    const numbersString = input.slice(numbersStartIndex);

    return this.extractNumbersFromString(numbersString, combinedDelimiters);
  }

  extractNumbersFromString(numbersString, allDelimiters) {
    const numbersArray = [];
    let currentNumber = '';
    let currentDelimiter = '';

    for (let char of numbersString) {
      if (/[0-9]/.test(char)) {
        this.validateAccumulatedDelimiter(currentDelimiter, allDelimiters);
        currentDelimiter = '';
        currentNumber += char;
      } else {
        this.addAccumulatedNumber(numbersArray, currentNumber);
        currentDelimiter += char;
        currentNumber = '';
      }
    }

    if (currentNumber) {
      numbersArray.push(Number(currentNumber));
    }

    return numbersArray;
  }

  validateAccumulatedDelimiter(accumulatingChar, allDelimiters) {
    if (accumulatingChar) {
      this.validateDelimiter(accumulatingChar, allDelimiters);
    }
  }

  addAccumulatedNumber(numbersArray, accumulatingNumber) {
    if (accumulatingNumber) {
      numbersArray.push(Number(accumulatingNumber));
    }
  }

  validateDelimiter(char, allDelimiters) {
    if (!allDelimiters.has(char)) {
      throw new Error(
        `[ERROR] 허용되지 않은 구분자: ${char} 가 입력되었습니다. 입력 문자열을 확인해주세요.`
      );
    }
  }
}

export default StringInputProcessor;
