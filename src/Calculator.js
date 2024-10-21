import {
  DEFAULT_SEPARATORS,
  CUSTOM_DESIGNATORS,
  CUSTOM_SEPARATOR_REGEX,
  ERROR_MESSAGE,
  INVALID_CUSTOM_SEPARATOR_REGEX,
} from './constants.js';

class Calculator {
  #inputText;
  #customSeparator;
  #numbers;
  #result;

  constructor(input) {
    this.#inputText = input;
    this.#result = 0;
  }

  #findCustomSeparator() {
    if (!this.#inputText.startsWith(CUSTOM_DESIGNATORS.start)) {
      if (CUSTOM_SEPARATOR_REGEX.test(this.#inputText)) throw new Error(ERROR_MESSAGE.customPosition);
      return (this.#customSeparator = '');
    }

    const customSeparator = this.#inputText.match(CUSTOM_SEPARATOR_REGEX)[0];
    if (INVALID_CUSTOM_SEPARATOR_REGEX.test(customSeparator)) throw new Error(ERROR_MESSAGE.invalidCustom);

    return customSeparator;
  }

  #splitTextToNumber() {
    this.#customSeparator = this.#findCustomSeparator();
    const separatorsRegex = new RegExp(
      `${DEFAULT_SEPARATORS.join('|')}${this.#customSeparator && '|' + this.#customSeparator}`,
      'g'
    );

    const splitTarget = this.#customSeparator
      ? this.#inputText.slice(this.#inputText.indexOf(CUSTOM_DESIGNATORS.end) + 2)
      : this.#inputText;

    if (CUSTOM_SEPARATOR_REGEX.test(splitTarget)) throw new Error(ERROR_MESSAGE.duplicatedCustom);

    this.#numbers = splitTarget.split(separatorsRegex).map((char) => (char.length ? Number(char) : ''));
  }

  #calculateSum() {
    const nonPositiveNumbers = this.#numbers.filter((number) => typeof number !== 'string' && Math.sign(number) < 1);
    const invalidFormats = this.#numbers.filter((number) => typeof number !== 'number' || Number.isNaN(number));
    if (nonPositiveNumbers.length) throw new Error(ERROR_MESSAGE.positiveNum);
    else if (invalidFormats.length) throw new Error(ERROR_MESSAGE.invalidFormat);

    return this.#numbers.reduce((acc, cur) => acc + cur, 0);
  }

  calculateStringSum() {
    if (!this.#inputText.length) return;

    this.#splitTextToNumber();
    this.#result = this.#calculateSum();
  }

  get result() {
    return this.#result;
  }
}

export default Calculator;
