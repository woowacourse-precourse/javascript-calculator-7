import { DEFAULT_SEPARATORS } from './constants.js';

class Calculator {
  #inputText;
  #numbers;

  constructor(input) {
    this.#inputText = input;
    this.#numbers = 0;
  }

  splitTextToNumber() {
    const separatorsRegex = new RegExp(`${DEFAULT_SEPARATORS.join('|')}`, 'g');
    this.#numbers = this.#inputText.split(separatorsRegex).map(Number);
  }
}

export default Calculator;
