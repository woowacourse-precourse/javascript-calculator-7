import ProcessorValidator from '../validators/ProcessorValidator.js';

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

    ProcessorValidator.validateInputFormat(input);

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

    ProcessorValidator.validateFirstChar(numbersString[0]);

    for (let char of numbersString) {
      if (/[0-9]/.test(char)) {
        if (currentDelimiter) {
          ProcessorValidator.validateDelimiter(currentDelimiter, allDelimiters);
        }
        currentDelimiter = '';
        currentNumber += char;
      } else {
        this.addAccumulatedNumber(numbersArray, currentNumber);
        currentDelimiter += char;
        currentNumber = '';
      }
    }

    ProcessorValidator.validateLastChar(
      currentNumber,
      currentDelimiter,
      numbersArray,
      allDelimiters
    );

    return numbersArray;
  }

  addAccumulatedNumber(numbersArray, accumulatingNumber) {
    if (accumulatingNumber) {
      numbersArray.push(Number(accumulatingNumber));
    }
  }
}

export default StringInputProcessor;
