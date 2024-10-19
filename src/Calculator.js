import OutputHandler from './OutputHandler.js';

const DEFAULT_SEPARATOR = [',', ':'];

class Calculator {
  constructor() {
    this.outputHandler = new OutputHandler();
  }
  
  calculate(inputString) {
      const isCustomerSeparator = this.determineSeparator(inputString);
      if (isCustomerSeparator) {
        console.log(isCustomerSeparator);
        const customSeparator = DEFAULT_SEPARATOR.push(this.getCustomSeparator(inputString));
      } else {
        console.log(isCustomerSeparator);
      }
  }

  determineSeparator(inputString = '') {
    if (inputString.startsWith('//') && inputString.indexOf('\\n') > 2) {
      return true; 
    } else if (DEFAULT_SEPARATOR.some(separator => inputString.includes(separator))) {
      return false
    } else {
      throw new Error("구분자가 없습니다.");
    }
  }

  getCustomSeparator(inputString = '') {
    const newIndex = inputString.indexOf('\\n');
    const customSeparator = inputString.substring(2, newIndex);
    console.log(customSeparator);
    this.validateCustomSeparator(customSeparator); 
    return customSeparator;
  }

  validateCustomSeparator(separator) {
    if (separator.length !== 1) {
      throw new Error("커스텀 구분자는 하나의 문자여야 합니다.");
    }
  }
}

export default Calculator;